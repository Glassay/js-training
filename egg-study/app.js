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
    const hasParticipant = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasParticipant.length === 0) {
      const participantSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('wechat').notNullable().defaultTo('');
        table.string('mobile').notNullable().defaultTo('');
        table.string('in').notNullable().defaultTo('');
        table.integer('vcount').notNullable().defaultTo(0);
        // table.string('violation').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(participantSchema.toString());
      yield ctx.helper.unique(app, 'user', 'wechat');
    }

    const hasWorks = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (hasWorks.length === 0) {
      const worksSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        // table.string('参赛者').notNullable().defaultTo('');
        table.string('wechat').notNullable().defaultTo('');
        table.string('works1').notNullable().defaultTo('');
        table.string('works2').notNullable().defaultTo('');
        table.string('works3').notNullable().defaultTo('');
        table.string('violation').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(worksSchema.toString());
      yield ctx.helper.unique(app, 'works', 'wechat');
    }

    const hasVote = yield app.mysql.query(knex.schema.hasTable('votelist').toString());
    if (hasVote.length === 0) {
      const voteSchema = knex.schema.createTableIfNotExists('votelist', function(table) {
        table.increments();
        table.string('wechat').notNullable().defaultTo('');
        table.string('vote1').notNullable().defaultTo('');
        table.string('vate2').notNullable().defaultTo('');
        table.string('vote3').notNullable().defaultTo('');
        // table.string('作品3').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(voteSchema.toString());
      yield ctx.helper.unique(app, 'user', 'wechat');
    }
  });
};

