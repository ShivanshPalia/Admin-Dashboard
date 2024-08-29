
import React from 'react'
import Dashboardclient from './dashboardclient';
import { fetchUsers, } from '@/lib/fetchData';
import { fetchRecentActivities } from '@/lib/fetchrecentactivities';
export default async function DashboardServer() {
 
  const users = await fetchUsers();
  const recentActivities = await fetchRecentActivities()
  return (
    <div className='w-[100%]'>
      <Dashboardclient data={users} recentActivities={recentActivities}  />
    </div>
  );
}
