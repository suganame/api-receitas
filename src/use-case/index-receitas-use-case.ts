import { ReceitaRepository } from "../respositories/receitas-repository";

interface IndexReceitaUseCaseRequest {
  limit: number;
  offset: number;
}

export class IndexReceitaUseCase {
  constructor(private receitaRepository: ReceitaRepository) {}

  async execute(request: IndexReceitaUseCaseRequest) {
    const { limit, offset } = request;

    const data = await this.receitaRepository.index({
      limit,
      offset,
    });
    return data;
  }
}
