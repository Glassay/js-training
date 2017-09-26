'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('users').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('users', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const hasStudent = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (hasStudent.length === 0) {
      const studentSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo();
        table.string('class').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(studentSchema.toString());
    }

    const hasWorker = yield app.mysql.query(knex.schema.hasTable('worker').toString());
    if (hasWorker.length === 0) {
      const workerSchema = knex.schema.createTableIfNotExists('worker', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('sex').notNullable().defaultTo('');
        table.string('work').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(workerSchema.toString());
    }
  });
};
