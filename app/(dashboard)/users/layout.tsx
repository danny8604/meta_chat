import getUsers from "@/actions/getUsers";
import Panel from "@/components/panel/Panel";
import UsersList from "@/components/user/UsersList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <>
      <Panel model="users">
        <UsersList users={users} />
      </Panel>
      <main className=" w-full">{children}</main>
    </>
  );
}
