import { useState, useEffect } from 'react';
import { getUserFeedback } from '@/app/actions/action';

interface Feedback {
  name: string | null;
  email: string;
  feedback: string | null;
  createdAt: Date;
}

const FeedbackList = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const feedbackData = await getUserFeedback();
        setFeedback(feedbackData);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    }
    fetchFeedback();
  }, []);

  return (
    <section className="bg-white w-full shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">User Feedback</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-gray-900">
              <th className="py-2 px-4 border-b">User Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedback.length > 0 ? (
              feedback.map((item, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.email}</td>
                  <td className="py-2 px-4 border-b">{item.feedback}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-2 px-4 border-b" colSpan={4}>
                  No feedback available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeedbackList;
