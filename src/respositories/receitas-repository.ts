export interface ReceitaCreateData {
  descricao: string;
  tempo_preparo: string;
  rendimento: string;
  instrucao_adicional: string;
}

export interface ReceitaUpdateData {
  id: string;
  descricao: string;
  tempo_preparo: string;
  rendimento: string;
  instrucao_adicional: string;
}

export interface ReceitaData {
  id: number;
  descricao: string;
  tempo_preparo: string;
  rendimento: string;
  instrucao_adicional: string;
}

export interface ReceitaDeleteData {
  id: string;
}

export interface ReceitaRepository {
  create: (data: ReceitaCreateData) => Promise<void>;
  index: () => Promise<ReceitaData[]>;
  update: (data: ReceitaUpdateData) => Promise<void>;
  delete: (data: ReceitaDeleteData) => Promise<void>;
}
