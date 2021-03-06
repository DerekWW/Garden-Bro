'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('email').unique().notNullable();
    table.string('username').unique().notNullable();
    table.string('profile_pic').defaultTo('http://thinkholsinger.com/wp-content/themes/forwardtrends-custom-theme-corporate/img/no-photo.jpg')
    table.specificType('hashed_password', 'char(60)');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
