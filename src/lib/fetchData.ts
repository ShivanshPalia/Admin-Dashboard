import { db } from '@/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const fetchUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.error('Prisma error code:', error.code);
      console.error('Prisma error message:', error.message);
    } else {
      console.error('Error fetching users:', error);
    }
    return [];
  }
};
