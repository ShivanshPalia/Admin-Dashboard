// testPrisma.ts
import { db } from "@/db";

async function testDbConnection() {
  try {
    const users = await db.user.findMany();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await db.$disconnect();
  }
}

testDbConnection();
