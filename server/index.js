const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// const { isProd } = require('./common/utils');
// if (isProd) {
    // 开启 gzip 压缩 https://github.com/woai3c/node-blog/blob/master/doc/optimize.md
    const compression = require('compression');
    app.use(compression());
// }

app.use(
    '/:lang(a)?',
    (req, res, next) => {
        next();
    },
    require('./routers')(app)
);

const port = process.env.PORT || 5678;
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
