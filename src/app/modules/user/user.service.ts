// User service placeholder

import { prisma } from "../../../config/db";

// Example: Find user by email
export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};
