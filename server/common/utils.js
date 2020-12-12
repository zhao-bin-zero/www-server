'use strict';

const path = require('path');

const resolve = (dir) => {
    // console.log('-----__dirname----', __dirname)
    return path.join(__dirname, '../../', dir);
};


module.exports = {
    resolve,
    isProd: process.env.NODE_ENV === "production"
};
