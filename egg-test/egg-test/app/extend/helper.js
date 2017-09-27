/**
 * 2017-9-27 Jifeng Cheng
 * 添加unique方法
 */

'use strict';
const knex = require('knex');
module.exports = {
  * unique(app, table, name) {
    const uniqueName = knex.schema.alterTable(table, function(t) {
      t.unique(name);
    });
    yield app.mysql.query(uniqueName.toString());
  },
};
