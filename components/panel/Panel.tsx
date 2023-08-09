import Line from "../ui/Line";

const homePanelContent = {
  title: "HOME",
};

const conversationsPanelContent = {
  title: "CONVERSATIONS",
};

const usersPanelContent = {
  title: "USERS",
};

const PANEL_MAP = {
  home: homePanelContent,
  conversations: conversationsPanelContent,
  users: usersPanelContent,
};

interface PanelProps {
  model: "home" | "conversations" | "users";
  children?: React.ReactNode;
}

const Panel = ({ model, children }: PanelProps) => {
  const content = PANEL_MAP[model];

  return (
    <div className="h-full space-y-6 border-r border-slate-500 px-4 py-8 text-center dark:bg-slate-950">
      <h2 className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-xl font-bold tracking-wider text-transparent">
        {content.title}
      </h2>
      <Line />
      {children}
    </div>
  );
};

export default Panel;
