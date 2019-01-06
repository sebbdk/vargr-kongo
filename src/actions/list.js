module.exports = function(CollectionName, config = {}) {
  return async function (ctx) {
    const query = ctx.request.query;
    const items = await ctx.db
      .collection(CollectionName)
      .find({})
      .toArray();

    ctx.body = { items };

    return;
    let order = [
      query.orderBy || undefined,
      query.order || 'ASC'
    ];

    let options = {
      ...config.query,
      where: config.query && config.query.where || [],
      limit: parseInt(query.limit, 10) || 20,
      order: [['created', 'DESC']],
      offset: parseInt(query.offset, 10) || 0,
    };

    if(order[0] !== undefined) {
      options.order = [order];
    }

    const where = Object.getOwnPropertyNames(Model.attributes).reduce((conditions, field) => {
      if(query[field] !== undefined) {
        if(!conditions) {
          conditions = [];
        }

        // The params can be sendt like name=%\dexter%, just make sure to escape like %\x, to prevent decoding errors.
        //conditions[Op.or][field] = query[field];
        const con = {
          [field]: { $like: query[field] }
        };
        conditions.push(con);
      }

      return conditions;
    }, []);

    options.where = [
      ...options.where,
      ...where
    ];

    const results = await Model.findAll(options);
    ctx.body = { results };
  }
};