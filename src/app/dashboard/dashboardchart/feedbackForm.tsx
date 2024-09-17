// components/FeedbackForm.tsx
'use client';

import { useState, useTransition } from 'react';
import { submitFeedback } from '@/app/actions/action';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        await submitFeedback(name, email, feedback);
        setMessage('Feedback submitted successfully');
        setName('');
        setEmail('');
        setFeedback('');
      } catch (error) {
        setMessage('Error submitting feedback');
      }
    });
  };

  return (
    <div className="w-full bg-blue-400 mx-auto p-4 shadow-lg rounded">
      <h2 className="text-2xl text-white  mb-4">Submit Your Feedback</h2>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
          placeholder='Name'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <input
          placeholder='Email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <textarea
          placeholder='Enter Your Feedback'
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-1/2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {isPending ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}
