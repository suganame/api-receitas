import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists("receitas_preparos", (table) => {
    table.increments("id").primary();
    table.integer("id_receita").unsigned().notNullable();
    table.foreign("id_receita").references("id").inTable("receitas");
    table.integer("sequencia").notNullable();
    table.string("descricao").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("receitas_preparos");
}
