# Kongo
Koa and MongoDB RESTful API boostrapping library

Returns a configured koa instance with a Restfull CRUD API configured.
Just another API library really.

## Feature-set
- RESTFull CRUD to the configured db/collections
- Filter/Search collections based on query or body content
- Modify CRUD API urls
- Cors integration with koa-cors
- gzip with koa-gzip

## Potential Features
- Save multiple documents per request
- Optionally configured document validation, to ensure type safety and ensure document consistency
- Optionally configured auth and data ownership rules
- Optionally configured nested saving, map certain xyz child objects to another collection
- Programatically testing using Jest like this instead: https://www.valentinog.com/blog/testing-api-koa-jest/

## How to use
To get going this is al you need:
```
const app = kongo({
    host: 'localhost',
    port: 27017,
    db: 'test',
    collections: [
        'test'
    ]
});

app.listen(4444);
```

## API
**function function init(config, server = new koa(), router = new Router())**
```
kongo(
    Object config = {
        ...inherits properties from nodejs mongodb driver settings
        Array collections [
            The name of a collection, to initialize with default settings, or a object with more specific settings
            String || Object {
                actions [ array of actions to activate, see possible values below
                    'add',
                    'all',
                    'delete',
                    'list',
                    'update',
                    'view'
                ]
            }

        ]
    }
    Koa instance - creates a new by default, insert your own here to override that
    KoaRouter instance - creates a new by default, insert your own here to override that
)
```
