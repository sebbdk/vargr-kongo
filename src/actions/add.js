const path = require('path');

module.exports = function(CollectionName, config = {}) {
  return async function (ctx) {
    const result = await ctx.db
      .collection(CollectionName)
      .insertOne(ctx.request.fields);

    const item = await ctx.db
      .collection(CollectionName)
      .findOne({_id: result.insertedId})

    // ctx.set('Status-Code', '201');
    ctx.response.status = 201;
    ctx.body = { ...item };
  }
};