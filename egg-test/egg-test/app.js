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
    const hasTeacher = yield app.mysql.query(knex.schema.hasTable('teacher').toString());
    if (hasTeacher.length === 0) {
      const teacherSchema = knex.schema.createTableIfNotExists('teacher', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('sex').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.string('subject').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(teacherSchema.toString());

      /* const uniqueName = knex.schema.alterTable('teacher', function(t) {
        t.unique('name');
      });
      yield app.mysql.query(uniqueName.toString());*/
      yield app.ctx.helper.unique(app, 'teacher', 'name');
    }
  });
};

