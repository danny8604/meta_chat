import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getMetaSession = async () => await getServerSession(authOptions);

export default getMetaSession;
