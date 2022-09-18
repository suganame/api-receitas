import ReceitaController from "../controllers/ReceitaController";
import { KnexReceitasRepository } from "../respositories/knex/knex-repository";
import { CreateReceitaUseCase } from "./create-receita-use-case";
import { DeleteReceitaUseCase } from "./delete-receita-use-case";
import { IndexReceitaUseCase } from "./index-receitas-use-case";
import { UpdateReceitaUseCase } from "./update-receita-use-case";

describe("CRUD recipe", () => {
  it("should get all recipes", async () => {
    const offset = 0;
    const limit = 10;
    const repository = new KnexReceitasRepository();
    const indexReceita = new IndexReceitaUseCase(repository);
    const receitas = await indexReceita.execute({ limit, offset });
    expect(receitas.length).toBeLessThanOrEqual(limit);
  });

  it("should create a new recipe", async () => {
    const repository = new KnexReceitasRepository();
    const createReceita = new CreateReceitaUseCase(repository);
    const receita = await expect(
      createReceita.execute({
        descricao: "pão de queijo",
        tempo_preparo: "1 hora",
        rendimento: "10 porções",
        instrucao_adicional: "",
      })
    ).resolves.not.toThrow();
  });

  it("should update a recipe", async () => {
    const repository = new KnexReceitasRepository();
    const createReceita = new CreateReceitaUseCase(repository);
    const updateReceita = new UpdateReceitaUseCase(repository);
    const receita = await createReceita.execute({
      descricao: "pão de queijo",
      tempo_preparo: "1 hora",
      rendimento: "10 porções",
      instrucao_adicional: "",
    });
    await expect(
      updateReceita.execute({
        id: receita.id,
        descricao: "pão de queijo minas",
      })
    ).resolves.not.toThrow();
  });

  it("should delete a recipe", async () => {
    const repository = new KnexReceitasRepository();
    const createReceita = new CreateReceitaUseCase(repository);
    const deleteReceita = new DeleteReceitaUseCase(repository);
    const receita = await createReceita.execute({
      descricao: "pão de queijo",
      tempo_preparo: "1 hora",
      rendimento: "10 porções",
      instrucao_adicional: "",
    });
    await expect(
      deleteReceita.execute({ id: receita.id })
    ).resolves.not.toThrow();
  });
});
