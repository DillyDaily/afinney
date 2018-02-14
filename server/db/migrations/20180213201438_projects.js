
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function (table) {
        table.increments();
        table.string('title');
        table.text('description');
        table.text('technologies');
        table.text('url');
        table.string('image');
        table.timestamps(true, true);
        });
    };
    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('projects');
    };
    