import { Request, Response } from "express";
import { AutenticacaoUsuarioServico } from "../services/AutenticacaoUsuarioServico";
import { CriadorDeMensagemServico } from "../services/CriadorDeMensagemServico";

class CriadorDeMensagemControle {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;

    const service = new CriadorDeMensagemServico();

    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}

export { CriadorDeMensagemControle };
