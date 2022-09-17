import knex from "../../database/connection";
import {
  ReceitaCreateData,
  ReceitaDeleteData,
  ReceitaIndexParams,
  ReceitaRepository,
  ReceitaShowParams,
  ReceitaUpdateData,
} from "../receitas-repository";

export class KnexReceitasRepository implements ReceitaRepository {
  async index({ limit, offset }: ReceitaIndexParams) {
    const data = await knex("receitas").limit(limit).offset(offset);
    return data;
  }

  async show({ id }: ReceitaShowParams) {
    const data = await knex("receitas").where("id", id).first();
    return data;
  }

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
