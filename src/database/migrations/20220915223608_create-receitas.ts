import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists("receitas", (table) => {
    table.increments("id").primary();
    table.string("descricao").notNullable();
    table.string("tempo_preparo").notNullable();
    table.string("rendimento").notNullable();
    table.string("instrucao_adicional").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("receitas");
}
