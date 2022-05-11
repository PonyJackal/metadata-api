import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('attributes', (table: Knex.TableBuilder) => {
        table.integer('id').primary().notNullable().unique();
        table.string('trait_type').notNullable();
        table.string('value').notNullable();
        table.string('display_type').notNullable();

        table
            .integer('token_id')
            .notNullable()
            .references('id')
            .inTable('tokens');

        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
}

