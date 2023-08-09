import getMessages from "@/actions/getMessages";
import ChatRoomBody from "./ChatRoomBody";
import ChatRoomHeader from "./ChatRoomHeader";
import MessageComposer from "./MessageComposer";

interface ChatRoomProps {
  conversationId: string;
}

const ChatRoom = async ({ conversationId }: ChatRoomProps) => {
  const messages = await getMessages(conversationId);

  console.log(messages, "<<<<<<<<<<<<<<<<<messages");
  return (
    <div className="flex h-full flex-col">
      <ChatRoomHeader />
      <ChatRoomBody initialMessages={messages} />
      <MessageComposer conversationId={conversationId} />
    </div>
  );
};

export default ChatRoom;
