import express from "express";
import ReceitaController from "./controllers/ReceitaController";

const routes = express.Router();

const receitaController = new ReceitaController();

routes.get("/receita", receitaController.index);
routes.get("/receita/:id", receitaController.show);
routes.post("/receita", receitaController.create);
routes.put("/receita/:id", receitaController.update);
routes.delete("/receita/:id", receitaController.destroy);

export default routes;
