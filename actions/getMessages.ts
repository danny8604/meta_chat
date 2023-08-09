import { Conversation } from "@prisma/client";
import prisma from "@/lib/prismadb";

export default async function getMessages(conversationId: Conversation["id"]) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages;
  } catch (error: any) {
    return [];
  }
}
