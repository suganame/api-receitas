"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_repository_1 = require("../respositories/knex/knex-repository");
const create_receita_use_case_1 = require("../use-case/create-receita-use-case");
class ReceitaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { descricao, tempo_preparo, rendimento, instrucao_adicional } = req.body;
                // console.log(req.body);
                const knexReceitasRepository = new knex_repository_1.KnexReceitasRepository();
                const createReceitaUseCase = new create_receita_use_case_1.CreateReceitaUseCase(knexReceitasRepository);
                yield createReceitaUseCase.execute({
                    descricao,
                    tempo_preparo,
                    rendimento,
                    instrucao_adicional,
                });
                return res.status(201).send();
            }
            catch (error) {
                console.error(error);
                return res.status(500).send();
            }
        });
    }
}
exports.default = ReceitaController;
