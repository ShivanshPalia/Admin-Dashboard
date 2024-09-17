import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import "@/app/dashboard/dashboardcard.css"; // Ensure this path is correct

type User = {
  name: string | null;
  email: string;
  phone: number;
  id: string;
  address: string | null;
  dateOfBirth: Date | null;
};

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="group  perspective cursor-pointer w-64 h-64">
      <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full bg-[#3b3b3b] rounded-lg p-4 flex flex-col backface-hidden  items-center justify-center shadow-md ">
          <div className="text-6xl text-[#9ae3b0] mb-4">
            <FaUserAlt />
          </div>
          <h2 className="text-2xl font-semibold text-[#f1f1f1]">{user.name}</h2>
        </div>
        {/* Back Side */}
        <div className="absolute transform rotate-y-180 w-full h-full bg-[#4a4a4a] rounded-lg p-4 shadow-md backface-hidden">
          <p className="text-lg font-semibold text-[#f1f1f1]">Email: {user.email}</p>
          <p className="text-lg font-semibold text-[#f1f1f1]">Phone: {user.phone}</p>
          <p className="text-lg font-semibold text-[#f1f1f1]">Address: {user.address}</p>
          <p className="text-lg font-semibold text-[#f1f1f1]">DOB: {user.dateOfBirth?.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
