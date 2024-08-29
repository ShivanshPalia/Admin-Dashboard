import { db } from '@/db';

export async function fetchRecentActivities() {
  const activities = await db.activity.findMany({
    include:{
        user:true
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10, // Fetch the last 10 activities, for example
  });

  return activities.map(activity => ({
    user: activity.user.name,
    action: activity.action,
    time: activity.createdAt.toISOString(),
  }));
}