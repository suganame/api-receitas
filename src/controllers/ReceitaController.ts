import { Request, Response } from "express";
import { KnexReceitasRepository } from "../respositories/knex/knex-repository";
import { CreateReceitaUseCase } from "../use-case/create-receita-use-case";
import { DeleteReceitaUseCase } from "../use-case/delete-receita-use-case";
import { IndexReceitaUseCase } from "../use-case/index-receitas-use-case";
import { ShowReceitaUseCase } from "../use-case/show-receita-use-case";
import { UpdateReceitaUseCase } from "../use-case/update-receita-use-case";

class ReceitaController {
  async index(req: Request, res: Response) {
    try {
      let { limit, offset }: any = req.query;

      limit = parseInt(limit || 10);
      offset = parseInt(offset || 0);

      const knexReceitasRepository = new KnexReceitasRepository();
      const indexReceitasUseCase = new IndexReceitaUseCase(
        knexReceitasRepository
      );

      const data = await indexReceitasUseCase.execute({
        limit,
        offset,
      });

      return res.status(201).json({
        success: true,
        data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send();
    }
  }

  async show(req: Request, res: Response) {
    try {
      let { id } = req.params;

      const knexReceitasRepository = new KnexReceitasRepository();
      const showReceitasUseCase = new ShowReceitaUseCase(
        knexReceitasRepository
      );

      const data = await showReceitasUseCase.execute({
        id,
      });

      return res.status(201).json({
        success: true,
        data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send();
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { descricao, tempo_preparo, rendimento, instrucao_adicional } =
        req.body;

      const knexReceitasRepository = new KnexReceitasRepository();

      const createReceitaUseCase = new CreateReceitaUseCase(
        knexReceitasRepository
      );

      await createReceitaUseCase.execute({
        descricao,
        tempo_preparo,
        rendimento,
        instrucao_adicional,
      });

      return res.status(201).json({
        success: true,
        message: "Receita inserida com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send();
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { descricao, tempo_preparo, rendimento, instrucao_adicional } =
        req.body;

      const { id } = req.params;

      const knexReceitasRepository = new KnexReceitasRepository();
      const updateReceitasUseCase = new UpdateReceitaUseCase(
        knexReceitasRepository
      );

      await updateReceitasUseCase.execute({
        id,
        descricao,
        tempo_preparo,
        rendimento,
        instrucao_adicional,
      });

      return res.status(201).json({
        success: true,
        message: "Receita atualizada com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send();
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const knexReceitasRepository = new KnexReceitasRepository();
      const deleteReceitasUseCase = new DeleteReceitaUseCase(
        knexReceitasRepository
      );

      await deleteReceitasUseCase.execute({
        id,
      });

      return res.status(201).json({
        success: true,
        message: "Receita removida com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send();
    }
  }
}

export default ReceitaController;
