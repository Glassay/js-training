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
    const ctx = app.createAnonymousContext();
    const hasParticipant = yield app.mysql.query(knex.schema.hasTable('参与者').toString());
    if (hasParticipant.length === 0) {
      const participantSchema = knex.schema.createTableIfNotExists('参与者', function(table) {
        table.increments();
        table.string('微信号').notNullable().defaultTo('');
        // table.string('手机号').notNullable().defaultTo('');
        table.string('是否参赛').notNullable().defaultTo('');
        table.integer('票数').notNullable().defaultTo(0);
        table.string('是否违规').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(participantSchema.toString());
      yield ctx.helper.unique(app, '参与者', '微信号');
    }

    const hasWorks = yield app.mysql.query(knex.schema.hasTable('作品库').toString());
    if (hasWorks.length === 0) {
      const worksSchema = knex.schema.createTableIfNotExists('作品库', function(table) {
        table.increments();
        // table.string('参赛者').notNullable().defaultTo('');
        table.string('微信号').notNullable().defaultTo('');
        table.string('作品1').notNullable().defaultTo('');
        table.string('作品2').notNullable().defaultTo('');
        table.string('作品3').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(worksSchema.toString());
    }

    const hasVote = yield app.mysql.query(knex.schema.hasTable('投票表').toString());
    if (hasVote.length === 0) {
      const voteSchema = knex.schema.createTableIfNotExists('投票表', function(table) {
        table.increments();
        table.string('微信号').notNullable().defaultTo('');
        table.string('所投者1').notNullable().defaultTo('');
        table.string('所投者2').notNullable().defaultTo('');
        table.string('所投者3').notNullable().defaultTo('');
        // table.string('作品3').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(voteSchema.toString());
    }
  });
};

