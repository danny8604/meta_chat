import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import Avatar from "../avatar/Avatar";
import { HiEllipsisHorizontal } from "react-icons/hi2";

const ChatRoomHeader = () => {
  return (
    <div className="flex w-full items-center justify-between border-b-[1px] border-slate-500 bg-none px-4 py-5 shadow-sm sm:px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <Link
          href="/conversations"
          className="block cursor-pointer  text-sky-500  transition hover:text-sky-600 lg:hidden"
        >
          <HiChevronLeft size={32} />
        </Link>

        <Avatar />
        {/* {conversation.isGroup ? (
          <AvatarGroup users={conversation.users} />
        ) : (
          <Avatar user={otherUser} />
        )} */}
        <div className="flex flex-col">
          <div>DUMMY_NAME</div>
          {/* <div>{conversation.name || otherUser.name}</div> */}
          <div className="text-sm font-light text-neutral-500">
            DUMMY_NAME
            {/* {statusText} */}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        className="text-sky-500transition cursor-pointer hover:text-sky-600"
      />
    </div>
  );
};

export default ChatRoomHeader;
