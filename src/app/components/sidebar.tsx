
'use client';
// components/Sidebar.tsx
import { useState } from 'react';
import { FaHome, FaUsers, FaChartBar, FaCogs, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSelectedLink } from '../selectedlinkprovider';
import Image from 'next/image';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const router = useRouter();
  const { setSelectedLink } = useSelectedLink();

  const handleLinkClick = (linkName: string, href: string) => {
    setSelectedLink(linkName);
    router.push(href);
  };

  return (
    <div className={`p-4 bg-[#4c4c4c] h-screen rounded m-4 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="" alt="profile" width={isCollapsed ? 0 : 40} height={isCollapsed ? 0 : 40} className="transition-all duration-300" />
          {!isCollapsed && (
            <span>
              <h3>Shivansh</h3>
              <h3>Palia</h3>
            </span>
          )}
        </div>
        <button onClick={toggleSidebar} className="text-white">
          {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <div onClick={() => handleLinkClick('Dashboard', '/')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center gap-4">
          <FaHome className="text-white" />
          {!isCollapsed && <span>DASHBOARD</span>}
        </div>
        <div onClick={() => handleLinkClick('Users', '/dashboard/users')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center gap-4">
          <FaUsers className="text-white" />
          {!isCollapsed && <span>USERS</span>}
        </div>
        <div onClick={() => handleLinkClick('Stocks', '/dashboard/stocks')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center gap-4">
          <FaChartBar className="text-white" />
          {!isCollapsed && <span>STOCKS</span>}
        </div>
        <div onClick={() => handleLinkClick('Analytics', '/dashboard/analytics')} className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center gap-4">
          <FaCogs className="text-white" />
          {!isCollapsed && <span>ANALYTICS</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSelectedLink } from "../selectedlinkprovider";
// import Image from "next/image";
// import { FiMenu, FiHome, FiUsers, FiBarChart, FiPieChart } from "react-icons/fi";

// interface SidebarProps {
//   onToggle: (collapsed: boolean) => void; // This defines the onToggle prop
// }


// export default function Sidebar({ onToggle }: SidebarProps) {
//   const router = useRouter();
//   const { setSelectedLink } = useSelectedLink();
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const handleLinkClick = (linkName: string, href: string) => {
//     setSelectedLink(linkName);
//     router.push(href);
//   };

//   return (
//     <div
//       className={`${
//         isCollapsed ? "w-[70px]" : "w-[250px]"
//       } h-screen bg-[#4c4c4c] p-4 rounded transition-all duration-300 ease-in-out relative`}
//     >
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           {!isCollapsed && (
//             <Image src="" alt="profile" width={30} height={30} />
//           )}
//           <span className={`${isCollapsed ? "hidden" : "block"}`}>
//             <h3>Shivansh</h3>
//             <h3>Palia</h3>
//           </span>
//         </div>
//         <button
//           className="absolute right-[-10px] top-4 p-1 bg-[#2c2c2c] text-white rounded-full"
//           onClick={() => setIsCollapsed(!isCollapsed)}
//         >
//           <FiMenu />
//         </button>
//       </div>

//       <div className="flex flex-col gap-4 pt-4">
//         <div
//           onClick={() => handleLinkClick("Dashboard", "/")}
//           className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center"
//         >
//           <FiHome className="mr-4 text-xl" />
//           <span className={`${isCollapsed ? "hidden" : "block"}`}>DASHBOARD</span>
//         </div>
//         <div
//           onClick={() => handleLinkClick("Users", "/dashboard/users")}
//           className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center"
//         >
//           <FiUsers className="mr-4 text-xl" />
//           <span className={`${isCollapsed ? "hidden" : "block"}`}>USERS</span>
//         </div>
//         <div
//           onClick={() => handleLinkClick("Stocks", "/dashboard/stocks")}
//           className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center"
//         >
//           <FiBarChart className="mr-4 text-xl" />
//           <span className={`${isCollapsed ? "hidden" : "block"}`}>STOCKS</span>
//         </div>
//         <div
//           onClick={() => handleLinkClick("Analytics", "/dashboard/analytics")}
//           className="hover:bg-[#2c2c2c] p-2 rounded cursor-pointer flex items-center"
//         >
//           <FiPieChart className="mr-4 text-xl" />
//           <span className={`${isCollapsed ? "hidden" : "block"}`}>ANALYTICS</span>
//         </div>
//       </div>
//     </div>
//   );
// }
