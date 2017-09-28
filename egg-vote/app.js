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
    const hasUser = yield app.mysql.query(knex.schema.hasTable('用户').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('用户', function(table) {
        table.increments();
        table.string('微信号').notNullable().defaultTo('');
        table.string('手机号').notNullable().defaultTo('');
        table.integer('投票次数').notNullable().defaultTo(0);
        table.string('是否参赛').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, '用户', '微信号');
    }

    const hasWorks = yield app.mysql.query(knex.schema.hasTable('作品').toString());
    if (hasWorks.length === 0) {
      const worksSchema = knex.schema.createTableIfNotExists('作品', function(table) {
        table.increments();
        table.string('微信号').notNullable().defaultTo('');
        table.string('审核状态').notNullable().defaultTo('');
        table.string('型号').notNullable().defaultTo('');
        table.string('票数').notNullable().defaultTo('');
        table.string('图片URL').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(worksSchema.toString());
      yield ctx.helper.unique(app, '作品', '微信号');
    }
  });
};
