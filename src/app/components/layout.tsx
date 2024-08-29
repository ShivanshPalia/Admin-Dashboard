import { ReactNode } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
interface LayoutProps {
  children: ReactNode;
}

const Layout =async ({ children }: LayoutProps) => {
  
  return (
    
    <div className="flex">
      <div className="basis-1/4">
        <Sidebar />
      </div>
      <div className="basis-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
    
  );
};

export default Layout;
