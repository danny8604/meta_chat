import { useParams } from "next/navigation";

const useConversation = () => {
  const params = useParams();

  const conversationId = () => {
    if (!params?.conversationId) return "";

    return params.conversationId as string;
  };
  return { conversationId };
};

export default useConversation;
