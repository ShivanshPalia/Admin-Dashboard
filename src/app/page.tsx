import Image from "next/image";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Dashboard from "./dashboard/page";
export default function Home() {
  return (
    <div className="flex">
      <Dashboard/>
    </div>
  );
}
