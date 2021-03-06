exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', function (table) {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('admin_code', 8);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins');
};
