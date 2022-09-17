import { ReceitaRepository } from "../respositories/receitas-repository";

interface GetReceitaUseCaseRequest {
  limit: number;
  offset: number;
}

export class GetReceitaUseCase {
  constructor(private receitaRepository: ReceitaRepository) {}

  async execute(request: GetReceitaUseCaseRequest) {
    const { limit, offset } = request;

    const data = await this.receitaRepository.index({
      limit,
      offset,
    });
    return data;
  }
}
