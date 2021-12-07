import { Request, Response } from "express";
import { ProfileUsuarioService } from "../services/ProfileUsuarioService";

class ProfileUsuarioControle {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new ProfileUsuarioService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { ProfileUsuarioControle };
