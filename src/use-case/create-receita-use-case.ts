import { ReceitaRepository } from "../respositories/receitas-repository";

interface CreateReceitaUseCaseRequest {
  descricao: string;
  tempo_preparo: string;
  rendimento: string;
  instrucao_adicional: string;
}

export class CreateReceitaUseCase {
  constructor(private receitaRepository: ReceitaRepository) {}

  async execute(request: CreateReceitaUseCaseRequest) {
    const { descricao, tempo_preparo, rendimento, instrucao_adicional } =
      request;

    await this.receitaRepository.create({
      descricao,
      tempo_preparo,
      rendimento,
      instrucao_adicional,
    });
  }
}
