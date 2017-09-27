/**
 * 2017-9-27 JifengCheng
 * 数据库建表
 */

'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    // const ctx = app.createAnonymousContext();
    const hasPeople = yield app.mysql.query(knex.schema.hasTable('people').toString());
    if (hasPeople.length === 0) {
      const peopleSchema = knex.schema.createTableIfNotExists('people', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('adress').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.string('job').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(peopleSchema.toString());

      /* const uniqueName = knex.schema.alterTable('teacher', function(t) {
        t.unique('name');
      });
      yield app.mysql.query(uniqueName.toString());*/
      // yield ctx.helper.unique(app, '', 'name');
    }
  });
};
