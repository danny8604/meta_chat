import prisma from "@/lib/prismadb";
import getMetaSession from "./getMetaSession";

const getUsers = async () => {
  const session = await getMetaSession();
  if (!session?.user?.email) return [];

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      NOT: {
        email: session.user.email,
      },
    },
  });

  return users;
};

export default getUsers;
