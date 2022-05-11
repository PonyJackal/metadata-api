import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tokens', (table: Knex.TableBuilder) => {
        table.integer('id').primary().notNullable().unique();
        table.string('description').notNullable();
        table.string('external_url').notNullable();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
}

