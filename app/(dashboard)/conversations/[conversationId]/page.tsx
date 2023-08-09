import ChatRoom from "@/components/room/ChatRoom";

interface ConversationIdProps {
  conversationId: string;
}

export default function ConversationId({
  params,
}: {
  params: ConversationIdProps;
}) {
  return <ChatRoom />;
}
