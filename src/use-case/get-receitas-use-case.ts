import { ReceitaRepository } from "../respositories/receitas-repository";

export class GetReceitaUseCase {
  constructor(private receitaRepository: ReceitaRepository) {}

  async execute() {
    const data = await this.receitaRepository.index();
    return data;
  }
}
