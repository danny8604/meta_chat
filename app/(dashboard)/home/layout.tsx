import Panel from "@/components/panel/Panel";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Panel model="home">
        <p>bulletin board</p>
      </Panel>
      <main className="w-full">{children}</main>
    </>
  );
}
