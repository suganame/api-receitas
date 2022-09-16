import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists(
    "receitas_ingredientes",
    (table) => {
      table.increments("id").primary();
      table.integer("id_receita").unsigned().notNullable();
      table.foreign("id_receita").references("id").inTable("receitas");
      table.string("quantidade").notNullable();
      table.string("descricao").notNullable();
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("receitas_ingredientes");
}
