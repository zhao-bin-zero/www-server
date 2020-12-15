const express = require('express'),
    router = express.Router();
const fs = require('fs');
const LRU = require('lru-cache');
const { createBundleRenderer } = require('vue-server-renderer');
const { resolve, isProd } = require('../common/utils');
const favicon = require('serve-favicon');
const devServer = require(resolve('./build/setup-dev-server'));

const renderVue = (app) => {
    const serve = (path, cache) =>
        express.static(resolve(path), {
            maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0,
        });

    // 设置 favicon
    app.use(favicon(resolve('./public/favicon.ico')));
    app.use('/dist', serve('./dist', true));

    const microCache = LRU({
        max: 100,
        maxAge: 1000, // 重要提示：条目在 1 秒后过期。
    });
    function createRenderer(bundle, options) {
        return createBundleRenderer(
            bundle,
            Object.assign(options, {
                basedir: resolve('./dist'),
                runInNewContext: false,
            })
        );
    }

    let renderer;
    let readyPromise;
    const templatePath = resolve('./public/index.template.html');

    if (isProd) {
        const template = fs.readFileSync(templatePath, 'utf-8');
        const bundle = require(resolve('./dist/vue-ssr-server-bundle.json'));
        const clientManifest = require(resolve('./dist/vue-ssr-client-manifest.json')); // 将js文件注入到页面中
        renderer = createRenderer(bundle, {
            template,
            clientManifest,
        });
    } else {
        readyPromise = devServer(app, templatePath, (bundle, options) => {
            renderer = createRenderer(bundle, options);
        });
    }
    const isCacheable = (req) => {
        // 实现逻辑为，检查请求是否是用户特定(user-specific)。
        // 只有非用户特定(non-user-specific)页面才会缓存
        return true;
    };
    function render(req, res) {
        const cacheable = isCacheable(req);
        if (cacheable) {
            const hit = microCache.get(req.url);
            if (hit) {
                console.log('Response from cache');
                return res.end(hit);
            }
        }

        const startTime = Date.now();
        res.setHeader('Content-Type', 'text/html');

        const handleError = (err) => {
            if (err.url) {
                res.redirect(err.url);
            } else if (err.code === 404) {
                res.status(404).send('404 | Page Not Found');
            } else {
                res.status(500).send('500 | Internal Server Error~');
                console.log(err);
            }
        };

        const context = {
            url: req.url,
            cookies: req.cookies,
        };
        console.log('context', context);
        renderer.renderToString(context, (err, html) => {
            // console.log(err, html)
            if (err) {
                return handleError(err);
            }
            res.send(html);
            if (cacheable) {
                microCache.set(req.url, html);
            }
            if (!isProd) {
                console.log(`whole request: ${Date.now() - startTime}ms`);
            }
        });
    }

    router.get(
        '*',
        isProd
            ? render
            : (req, res) => {
                  readyPromise.then(() => {
                      return render(req, res);
                  });
              }
    );
    return router;
};

module.exports = renderVue;
