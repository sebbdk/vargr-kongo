/*
* @Author: kasper
* @Date:   2017-03-19 01:44:37
* @Last Modified by:   kasper
* @Last Modified time: 2018-01-03 20:18:49
*/
const listAction = require('./list');
const viewAction = require('./view');
const deleteAction = require('./delete');
const addAction = require('./add');
const updateAction = require('./update');

function underScoreName(string) {
  return string
    .replace(/\.?([A-Z]+)/g, (x,y) => ("_" + y.toLowerCase()))
    .replace(/^_/, "");
}

module.exports = function(router, modelName, options) {
  options = {
    path: '/',
    index: {},
    add: {},
    view: {},
    update: {},
    delete: {},
    ...options
  }
  const lwrCseName = underScoreName(modelName);

  router.get(`${options.path}${lwrCseName}`, listAction(modelName, options.index));
  router.post(`${options.path}${lwrCseName}`, addAction(modelName, options.add));
  router.get(`${options.path}${lwrCseName}/:id`, viewAction(modelName, options.view));
  router.put(`${options.path}${lwrCseName}/:id`, updateAction(modelName, options.update));
  router.delete(`${options.path}${lwrCseName}/:id`, deleteAction(modelName, options.delete));
}