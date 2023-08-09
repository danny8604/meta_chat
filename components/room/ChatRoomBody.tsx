"use client";

import { Message, User } from "@prisma/client";
import { useRef, useState } from "react";

interface ChatRoomBodyProps {
  initialMessages?: Message[];
}

const ChatRoomBody = ({ initialMessages = [] }: ChatRoomBodyProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);

  return (
    <div className="h-full overflow-y-auto">
      {messages.map((message) => (
        <p key={message.id}>{message.body}</p>
      ))}
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
};

export default ChatRoomBody;
