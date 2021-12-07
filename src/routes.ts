import { Router } from "express";
import { AutenticacaoUsuarioControle } from "./controllers/AutenticacaoUsuarioControle";
import { CriadorDeMensagemControle } from "./controllers/CriadorDeMensagemControle";
import { PegarUltimasMensagensControle } from "./controllers/PegarUltimasMensagensControle";
import { ProfileUsuarioControle } from "./controllers/ProfileUsuarioControle";
import { garantirAutenticacao } from "./middleware/garantirAutenticacao";

const router = Router();

router.post("/autenticacao", new AutenticacaoUsuarioControle().handle);

router.post(
  "/mensagens",
  garantirAutenticacao,
  new CriadorDeMensagemControle().handle
);

router.get("/mensagens/att", new PegarUltimasMensagensControle().handle);

router.get(
  "/profile",
  garantirAutenticacao,
  new ProfileUsuarioControle().handle
);

export { router };
