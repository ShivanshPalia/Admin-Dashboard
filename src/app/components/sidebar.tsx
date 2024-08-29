'use client'
// components/Sidebar.tsx
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from 'next/navigation';
import { useSelectedLink } from "../selectedlinkprovider";

export default function Sidebar() {
  const router = useRouter();
  const { setSelectedLink } = useSelectedLink();

  const handleLinkClick = (linkName: string, href: string) => {
    setSelectedLink(linkName);
    router.push(href);
  };

  return (
    <div className="p-4 bg-[#4c4c4c] h-screen rounded m-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <span>
          <h3>Shivansh</h3>
          <h3>Palia</h3>
        </span>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <div onClick={() => handleLinkClick('Dashboard', '/')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer">
          DASHBOARD
        </div>
        <div onClick={() => handleLinkClick('Users', '/dashboard/users')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer">
          USERS
        </div>
        <div onClick={() => handleLinkClick('Products', '/dashboard/products')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer">
          PRODUCTS
        </div>
        <div onClick={() => handleLinkClick('Analytics', '/dashboard/analytics')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer">
          ANALYTICS
        </div>
      </div>
    </div>
  );
}
