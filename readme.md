# Kongo
Koa and MongoDB RESTful API boostrapping library

**THIS DOES NOT WORK YET**

I am still porting the actions from my old sequalize setup.
I will finish this prototype in the next few days.

Returns a Koa instance configured to serve a RESTful API with the configured MongoDB and collections.

Comes with Cors and  gzip compression by default.

Simple add your custom Koa configuration to the returned object and the listen(myportnumber) method on it to make it go.
