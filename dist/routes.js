"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ReceitaController_1 = __importDefault(require("./controllers/ReceitaController"));
const routes = express_1.default.Router();
const receitaController = new ReceitaController_1.default();
routes.post("/receita", receitaController.create);
exports.default = routes;
