import axios from "axios";
import { Conversation, User } from "@prisma/client";

type startConversation = ({
  userId,
  isGroup,
  members,
  name,
}: {
  userId: User["id"];
  members?: User[];
  isGroup?: Conversation["isGroup"];
  name?: Conversation["name"];
}) => Promise<Conversation>;

export const startConversation: startConversation = async ({
  userId,
  isGroup,
  members,
  name,
}) => {
  try {
    const { data } = await axios.post("/api/conversations", {
      userId,
      isGroup,
      members,
      name,
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

type SendMessages = ({
  message,
  image,
  conversationId,
}: {
  message?: string;
  image?: any;
  conversationId: any;
}) => Promise<void>;

export const sendMessages: SendMessages = async ({
  message,
  image,
  conversationId,
}) => {
  try {
    const { data } = await axios.post("/api/messages", {
      message,
      image,
      conversationId,
    });
    console.log(data, "<<<<<<<<<<<<<< data 🐧🐧");

    return data;
  } catch (err) {
    console.log(err);
  }
};
