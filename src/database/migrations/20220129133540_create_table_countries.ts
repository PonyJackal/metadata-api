import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('countries', (table: Knex.TableBuilder) => {
        table.uuid('_id').primary().notNullable().unique();
        table.string('name').notNullable().unique();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {}
