# Kongo
Koa and MongoDB RESTful API boostrapping library

Returns a configured koa instance with a Restfull CRUD API configured.
Just another API library really.

The specified collection names are inflected upon the API fx ``http://localhost:3000/mycollection
reference the ´mycollection´ mongodb collection

Singular items are referenced by _id like ´http://localhost:3000/mycollection/{someID}´

And then common RESTFull methods apply to do CRUD

## And outtake of features
- RESTFull CRUD to the configured db/collections
- Filter/Search collections based on query or body content
- Modify CRUD API urls
- Cors integration with koa-cors
- gzip with koa-gzip

## Future Features
- Configure custom action paths
- Save multiple documents per request
- Optionally configured document validation, to ensure type safety and ensure document consistency
- Optionally configured auth and data ownership rules
- Optionally configured nested saving, map certain xyz child objects to another collection
- Programatically testing using Jest like this instead: https://www.valentinog.com/blog/testing-api-koa-jest/

## How to use
To get going this is all you need:
```
const app = kongo({
    dbConfig: {
        host: 'localhost',
        port: 27017,
        db: 'test',
    },
    collections: [
        'test',
    ]
});

app.listen(4444);
```

This will serve the test collection on http://localhost:4444/test

## Adding custom routing or only a subset of actions
```
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
```

## API
function kongo(Object **config**, Koa **server** = new koa(), KoaRouter **router** = new Router())
```
kongo(
    Object config = {
        dbConfig - MongoDB connection setting, see nodejs mongodb driver for more info
        Array collections [
            String - The name of a collection, to initialize with default settings on
        ],
        Koa server - creates a new by default, insert your own here to override that
        KoaRouter router - creates a new by default, insert your own here to override that
    }
)
```
