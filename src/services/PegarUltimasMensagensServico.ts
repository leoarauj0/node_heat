import prismaClient from "../prisma/index";

class PegarUltimasMensagensServico {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: { created_At: "desc" },
      include: { user: true },
    });

    return messages;
  }
}

export { PegarUltimasMensagensServico };
