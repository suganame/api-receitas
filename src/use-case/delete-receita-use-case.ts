import { ReceitaRepository } from "../respositories/receitas-repository";

interface DeleteReceitaUseCaseRequest {
  id: string;
}

export class DeleteReceitaUseCase {
  constructor(private receitaRepository: ReceitaRepository) {}

  async execute(request: DeleteReceitaUseCaseRequest) {
    const { id } = request;

    await this.receitaRepository.delete({
      id,
    });
  }
}
