

'use client';
// components/Layout.tsx
import { ReactNode, useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} `}>
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </div>

      {/* Navbar and Content */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'w-[calc(100%-4rem)]' : 'w-[calc(100%-16rem)]'}`}>
        <Navbar />
        {/* <main className="p-4">{children}</main> */}
      </div>
    </div>
  );
};

export default Layout;

// import { ReactNode, useState } from 'react';
// import Navbar from './navbar';
// import Sidebar from './sidebar';


// export default function Layout({ children }: LayoutProps) {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const handleSidebarToggle = (collapsed: boolean) => {
//     setIsSidebarCollapsed(collapsed);
//   };

//   return (
//     <div className="flex">
//       {/* Pass onToggle as a prop to Sidebar */}
//       <div className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? "w-[70px]" : "w-[250px]"}`}>
//         <Sidebar onToggle={handleSidebarToggle} />
//       </div>
//       <div className={`flex-grow transition-all duration-300 ease-in-out ${isSidebarCollapsed ? "ml-[70px]" : "ml-[250px]"}`}>
//         <Navbar />
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }
