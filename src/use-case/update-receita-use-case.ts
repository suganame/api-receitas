import { ReceitaRepository } from "../respositories/receitas-repository";

interface UpdateReceitaUseCaseRequest {
  id: string;
  descricao: string;
  tempo_preparo: string;
  rendimento: string;
  instrucao_adicional: string;
}

export class UpdateReceitaUseCase {
  constructor(private receitaRepository: ReceitaRepository) {}

  async execute(request: UpdateReceitaUseCaseRequest) {
    const { id, descricao, tempo_preparo, rendimento, instrucao_adicional } =
      request;

    await this.receitaRepository.update({
      id,
      descricao,
      tempo_preparo,
      rendimento,
      instrucao_adicional,
    });
  }
}
