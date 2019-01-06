const  { ObjectID } = require('mongodb');

module.exports = function(CollectionName) {
  return async function (ctx) {
    const result = await ctx.db
      .collection(CollectionName)
      .deleteOne({_id: new ObjectID(ctx.params.id)})

    ctx.body = {
      success: result.value !== null
    };
  }
};