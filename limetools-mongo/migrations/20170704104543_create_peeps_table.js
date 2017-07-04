
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peeps', function(t) {
        t.increments('id').unsigned().primary();
        t.integer('emp_no').unsigned(),
        t.string('first_name').notNull();
    });

//   return knex.raw(`CREATE TABLE employees (
//     id int(11) NOT NULL AUTO_INCREMENT,
//     emp_no int(11) NOT NULL,
//     first_name varchar(100) NOT NULL,
//     PRIMARY KEY (id)
//     ) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;`);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('peeps');

    //return knex.raw(`drop table peeps`);
};
