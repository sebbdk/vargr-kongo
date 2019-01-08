const fs = require('fs');
const newman = require('newman'); // require newman in your project
const Router = require('koa-router');

const kongo = require('./src/kongo');
const myCustomRouter = new Router();
const listAction = require('./src/actions/list');

myCustomRouter.get(`/someurl`, listAction('customCollection'));
const app = kongo({
    dbConfig: {
        host: 'localhost',
        port: 27017,
        db: 'test',
    },
    collections: [
        'test',
    ],
    router: myCustomRouter
});

app.listen(4444);

const info = squadJSON = JSON.parse(fs.readFileSync('postman.json', 'utf8'));;

newman.run({
    collection: info,
    reporters: 'cli'
},  (err) => {
    if (err) { throw err; }
    console.log('collection run complete!');
});
