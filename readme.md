# Kongo
Koa and MongoDB RESTful API boostrapping library

Returns a configured koa instance with a Restfull CRUD API configured.
Just another API library really.

I am still porting the actions from my old sequalize/sql setup.
Will finish this up soon, as i need it for other projects.

# Todo
- Douple check everything matches RESTFull conventions
- Add optional model validation
- Figure out a lightweight auth layer that can be put on top

# Planned Feature-set
- RESTFull CRUD to the configured db/collections
- Filter/Search collections based on query or body content
- Modify CRUD API urls
- Cors integration with koa-cors
- gzip with koa-gzip

# Potential features
- Save multiple items per request
- Nested saving, map certain xyz child objects to another collection
- Consider testing with jest like this instead: https://www.valentinog.com/blog/testing-api-koa-jest/
