import { PrismaClient } from "@prisma/client";
import UserTable from "../dashboard/users/page";
const db = new PrismaClient();
type User = {
  id: string;
  name: string | null;
  email: string;
  phone: number;
};
type UsersPageProps = {
  users: User[];
  error?: string;
};
export async function getServerSideProps() {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);

    return {
      props: {
        users: [],
        error: "Error loading users",
      },
    };
  }
}

const UsersPage = ({ users,error }:UsersPageProps) => {
  if (error) {
    return <div>{error}</div>;
  }
  return <UserTable/>;
  
};

export default UsersPage;
