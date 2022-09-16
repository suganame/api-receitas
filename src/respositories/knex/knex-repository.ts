import knex from "../../database/connection";
import {
  ReceitaCreateData,
  ReceitaDeleteData,
  ReceitaRepository,
  ReceitaUpdateData,
} from "../receitas-repository";

export class KnexReceitasRepository implements ReceitaRepository {
  async create({
    descricao,
    tempo_preparo,
    rendimento,
    instrucao_adicional,
  }: ReceitaCreateData) {
    await knex("receitas").insert({
      descricao,
      tempo_preparo,
      rendimento,
      instrucao_adicional,
    });
  }

  async index() {
    const data = await knex("receitas");
    return data;
  }

  async update({
    id,
    descricao,
    tempo_preparo,
    rendimento,
    instrucao_adicional,
  }: ReceitaUpdateData) {
    await knex("receitas")
      .update({
        descricao,
        tempo_preparo,
        rendimento,
        instrucao_adicional,
      })
      .where("id", id);
  }

  async delete({ id }: ReceitaDeleteData) {
    await knex("receitas").delete().where("id", id);
  }
}
