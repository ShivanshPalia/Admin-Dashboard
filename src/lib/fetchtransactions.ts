import { db } from "@/db";

export async function fetchTransactions() {
  return await db.transaction.findMany({
    include: {
      user: true,
    },
  });
}
