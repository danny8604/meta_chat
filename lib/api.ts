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

    console.log(data, "<<<<<<<<<<<<<< 🐧🐧🐧🐧🐧");

    return data;
  } catch (err) {
    console.log(err);
  }
};
