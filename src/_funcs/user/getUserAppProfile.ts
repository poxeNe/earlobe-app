import { UserProfile } from "../../types/types.ts";
import { PrismaClient } from "prisma/prisma-client/scripts/default-index";

const prisma = new PrismaClient();

export const getUserAppProfile = async (spotifyUser: UserProfile) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: spotifyUser.email,
    },
  });

  return;
};
