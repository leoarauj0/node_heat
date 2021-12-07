import { Request, Response } from "express";
import { AutenticacaoUsuarioServico } from "../services/AutenticacaoUsuarioServico";

class AutenticacaoUsuarioControle {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AutenticacaoUsuarioServico();

    try {
      const result = await service.execute(code);

      return response.json(result);
    } catch (error) {
      return response.json(error.message);
    }
  }
}

export { AutenticacaoUsuarioControle };
