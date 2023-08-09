import ChatRoomBody from "./ChatRoomBody";
import ChatRoomHeader from "./ChatRoomHeader";
import MessageComposer from "./MessageComposer";

const ChatRoom = () => {
  return (
    <div className="flex h-full flex-col">
      <ChatRoomHeader />
      <ChatRoomBody />
      <MessageComposer />
    </div>
  );
};

export default ChatRoom;
