## Overview

<p>Crud do backend de um sistema de receita para fins didáticos. O sistema foi desenvolvido com o objetivo de aplicar o conhecimento adquirido sobre Clean Architecture e TDD.</p>

## Requisitos

- NodeJS (16.17.0)
- Postman ou Insomnia (Ou qualquer ferramenta para rexecutar requisições API)

## Como Rodar

1. Rodar o comando `npm install` para que seja instalado todas as dependências do projeto.
2. Rodar o comando `npm run build` para que seja criado o build do projeto.
3. Executar o comando `npm run knex-migrate`, para que seja criado o banco de dados sqlite e as tabelas necessárias.
4. Executar o comando `npm run start`, rodar o projeto.

## Rotas

#### GET - /receita?limit=1&offset=0 (limit e offset opcional)

Lista todas receitas cadastradas.

#### GET - /receita/:id

Busca a receita com o id especificado.

#### POST - /receita

Cria uma receita

```jsonc

/* Body */
{  
  "descricao": "bolinho de chuva",
  "tempo_preparo": "30 minutos",
  "rendimento": "25 porções",
  "instrucao_adicional": ""
}
```

#### PUT - /receita/:id

Altera a receita de acordo com o id informado

```jsonc
/* Body */
{
  "descricao": "bolinho de chuva",
  "tempo_preparo": "30 minutos"
}
```

#### DELETE - /receita/:id

Deleta a receita de acordo com o id informado
