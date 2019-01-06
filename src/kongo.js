const koa = require('koa');
const Router = require('koa-router');
const convert = require('koa-convert');
const compress = require('koa-compress');
const MongoMiddlware = require('koa-mongo');
const bodyParser = require('koa-better-body');
const cors = require('koa2-cors');

const actions = require('./actions');

/**
 * Convenience method to configure the Koa instance
 * and initialize the MongoDB connection
 *
 * @param Object config
 * @param Koa app
 * @param Koa Router router
 */
module.exports = function init(config, server = new koa(), router = new Router()) {
    // Add request handlers
    config.collections && config.collections.forEach((item) => {
        if (typeof(item) === 'string') {
            actions.all(router, item);
        } else {
            Object.keys(item.actions).forEach(action => {
                actions[action](router, item, item);
            });
        }
    });

    server
        .use(MongoMiddlware(config.mongo))
        .use(cors(config.cors))
        .use(compress({
            filter: function (content_type) {
                return /json/i.test(content_type)
            },
            threshold: 2048,
            flush: require('zlib').Z_SYNC_FLUSH
        }))
        .use(convert(bodyParser()))
        .use(router.routes())
        .use(router.allowedMethods());

    return server;
}