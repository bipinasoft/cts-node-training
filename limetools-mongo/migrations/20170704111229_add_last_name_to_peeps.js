
exports.up = function(knex, Promise) {
    return knex.schema.table('peeps', function(t) {
        t.string('last_name').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('peeps', function(t) {
        t.dropColumn('last_name');
    });
};
