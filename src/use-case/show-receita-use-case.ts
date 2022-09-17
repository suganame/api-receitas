import { ReceitaRepository } from "../respositories/receitas-repository";

interface ShowReceitaUseCaseRequest {
  id: string;
}

export class ShowReceitaUseCase {
  constructor(private receitaRepository: ReceitaRepository) {}

  async execute(request: ShowReceitaUseCaseRequest) {
    const { id } = request;

    const data = await this.receitaRepository.show({ id });
    return data;
  }
}
