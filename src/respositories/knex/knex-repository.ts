import knex from "../../database/connection";
import {
  ReceitaCreateData,
  ReceitaDeleteData,
  ReceitaGetData,
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

  async index({ limit, offset }: ReceitaGetData) {
    const data = await knex("receitas").limit(limit).offset(offset);
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
