module.exports = function(ModelName) {
  return async function (ctx) {
    const Model = ctx.orm()[ModelName];
    let results = await Model.update(ctx.request.fields,{
      where: {
        id: ctx.params.id
      }
    });

    ctx.body = { };

    if(results[0] !== 0) {
      const result = await Model.findOne({
        where: {
          id: ctx.params.id
        }
      });

      ctx.body = result;
    }
  }
};