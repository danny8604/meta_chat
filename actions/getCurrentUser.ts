import prisma from "@/lib/prismadb";
import getMetaSession from "./getMetaSession";

const getCurrentUser = async () => {
  const session = await getMetaSession();

  if (!session?.user?.email) return null;

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    return null;
  }

  return currentUser;
};

export default getCurrentUser;
