import { Request, Response } from "express";
import { PegarUltimasMensagensServico } from "../services/PegarUltimasMensagensServico";

class PegarUltimasMensagensControle {
  async handle(request: Request, response: Response) {
    const service = new PegarUltimasMensagensServico();

    const result = await service.execute();

    return response.json(result);
  }
}

export { PegarUltimasMensagensControle };
