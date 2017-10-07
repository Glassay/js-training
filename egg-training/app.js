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
        table.integer('integer').notNullable().defaultTo(0);
        table.bigInteger('biginteger').notNullable().defaultTo(0);
        table.decimal('decimal', 2, 1).notNullable().defaultTo(0);
        table.float('float', 3, 2).notNullable().defaultTo(0);
        // table.bit('bit').notNullable().defaultTo();
        table.boolean('boolean').notNullable().defaultTo(0);
        table.string('string', 5).notNullable().defaultTo('');
        table.date('date').notNullable().defaultTo('2017-10-07');
        table.dateTime('datetime').notNullable().defaultTo('2017-10-07 00-00-00');
        table.time('time').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(table1Schema.toString());
    }
  });
};

