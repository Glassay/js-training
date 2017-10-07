'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasTable1 = yield app.mysql.query(knex.schema.hasTable('table1').toString());
    if (hasTable1.length === 0) {
      const table1Schema = knex.schema.createTableIfNotExists('table1', function(table) {
        table.increments();
        table.smallint('smallint').notNullable().defaultTo(0);
        table.mediumint('mediumint').notNullable().defaultTo(0);
        table.int('int').notNullable().defaultTo(0);
        table.integer('integer').notNullable().defaultTo(0);
        table.bigint('bigint').notNullable().defaultTo(0);
        table.decimal('decimal').notNullable().defaultTo(0);
        table.float('float').notNullable().defaultTo(0);
        table.double('double').notNullable().defaultTo(0);
        table.bit('bit').notNullable().defaultTo(0);
        table.boolean('boolean').notNullable().defaultTo();
        table.bool('bool').notNullable().defaultTo();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(table1Schema.toString());
    }
  });
};

