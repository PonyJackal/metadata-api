import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('attributes', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.string('trait_type').notNullable();
        table.string('value').notNullable();
        table.string('display_type');

        table.integer('token_id').unsigned().references('id').inTable('tokens');

        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('attributes');
}
