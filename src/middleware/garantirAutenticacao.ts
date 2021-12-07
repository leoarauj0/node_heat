import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function garantirAutenticacao(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ errorCode: "token.invalid" });
  }

  /**
   * ex: Bearer 32078rg83r8r07183208r7t20873t10r2
   *
   * [0] Bearer
   * [1] Token
   *
   * na desistruturação so colocamos uma virgula para que ele ignore a primeira posição.
   */
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ errorCode: "token.expired" });
  }
}
