"use client";

import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { AiFillHome } from "react-icons/ai";
import { signOut } from "next-auth/react";

export interface SidebarOption {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const useSidebarOptions = () => {
  const pathname = usePathname();

  const sidebarOptions: SidebarOption[] = [
    {
      label: "Home",
      href: "/home",
      icon: AiFillHome,
      active: pathname.startsWith("/home"),
    },
    {
      label: "Chat",
      href: "/conversations",
      icon: HiChat,
      active: pathname.startsWith("/conversations"),
    },
    {
      label: "Users",
      href: "/users",
      icon: HiUsers,
      active: pathname.startsWith("/users"),
    },
    {
      label: "Logout",
      href: "/signin",
      icon: HiArrowLeftOnRectangle,
      onClick: () => signOut({ redirect: false }),
    },
  ];

  return sidebarOptions;
};

export default useSidebarOptions;
