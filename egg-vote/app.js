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
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('wechat').notNullable().defaultTo('');
        table.string('mobile').notNullable().defaultTo('');
        table.integer('vtimes').notNullable().defaultTo(0);
        table.string('type').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'wechat');
      yield ctx.helper.unique(app, 'user', 'mobile');
    }

    const hasWorks = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (hasWorks.length === 0) {
      const worksSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        table.string('wechat').notNullable().defaultTo('');
        table.string('state').notNullable().defaultTo('');
        // table.string('').notNullable().defaultTo('');
        table.string('vnumber').notNullable().defaultTo('');
        table.string('pic_url').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(worksSchema.toString());
      yield ctx.helper.unique(app, '作品', '微信号');
      yield ctx.helper.unique(app, '作品', '图片URL');
    }
  });
};
