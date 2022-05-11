import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('attributes', (table: Knex.TableBuilder) => {
        table.uuid('_id').primary().notNullable().unique();
        table.string('trait_type').notNullable();
        table.string('value').notNullable();
        table.string('display_type');

        table
            .integer('token_id')
            .unsigned()
            .references('id')
            .inTable('tokens')
            .onUpdate('CASCADE') // If Article PK is changed, update FK as well.
            .onDelete('CASCADE');

        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {}
