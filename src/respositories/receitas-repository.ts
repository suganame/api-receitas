export interface ReceitaData {
  id: number;
  descricao: string;
  tempo_preparo: string;
  rendimento: string;
  instrucao_adicional: string;
}

export interface ReceitaIndexParams {
  limit: number;
  offset: number;
}

export interface ReceitaShowParams {
  id: string;
}

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

export interface ReceitaDeleteData {
  id: string;
}

export interface ReceitaRepository {
  index: (data: ReceitaIndexParams) => Promise<ReceitaData[]>;
  show: (data: ReceitaShowParams) => Promise<ReceitaData>;
  create: (data: ReceitaCreateData) => Promise<void>;
  update: (data: ReceitaUpdateData) => Promise<void>;
  delete: (data: ReceitaDeleteData) => Promise<void>;
}
