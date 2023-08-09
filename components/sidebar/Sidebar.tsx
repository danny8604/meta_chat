import MetaLogo from "../logo/MetaLogo";
import SidebarOptions from "./SidebarOptions";
import Avatar from "../avatar/Avatar";
import getCurrentUser from "@/actions/getCurrentUser";
import Line from "../ui/Line";

const Sidebar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex h-full flex-col items-center space-y-6 border-r border-slate-500 px-6 py-8 dark:bg-slate-950">
      <Avatar user={currentUser!} />
      <Line />
      <MetaLogo size={40} />
      <Line />
      <SidebarOptions />
    </div>
  );
};

export default Sidebar;
