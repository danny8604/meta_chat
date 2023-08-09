"use client";

import { User } from "@prisma/client";
import Avatar from "../avatar/Avatar";
import { useRouter } from "next/navigation";
import { startConversation } from "@/lib/api";
import { useState } from "react";
import LoadingModal from "../modal/LoadingModal";

interface UserBox {
  user: User;
}

const UserBox = ({ user }: UserBox) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClickUserBox = async () => {
    setIsLoading(true);
    const data = await startConversation({ userId: user.id });

    if (data) {
      router.push(`/conversations/${user.id}`);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={onClickUserBox}
        className="relative flex w-full cursor-pointer items-center space-x-4 rounded-lg border border-slate-500 px-8 py-2 transition hover:border-slate-600  dark:hover:border-slate-400"
      >
        <Avatar user={user} size={30} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium tracking-wider">{user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
