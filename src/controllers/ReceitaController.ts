import { Request, Response } from "express";
import { KnexReceitasRepository } from "../respositories/knex/knex-repository";
import { CreateReceitaUseCase } from "../use-case/create-receita-use-case";
import { DeleteReceitaUseCase } from "../use-case/delete-receita-use-case";
import { GetReceitaUseCase } from "../use-case/get-receitas-use-case";
import { UpdateReceitaUseCase } from "../use-case/update-receita-use-case";

class ReceitaController {
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

  async index(req: Request, res: Response) {
    try {
      const knexReceitasRepository = new KnexReceitasRepository();
      const getReceitasUseCase = new GetReceitaUseCase(knexReceitasRepository);

      const data = await getReceitasUseCase.execute();

      return res.status(201).json({
        success: true,
        data,
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
