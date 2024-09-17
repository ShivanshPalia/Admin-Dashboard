'use client';

import { useState, useTransition } from 'react';
import { searchUserByName } from '@/app/actions/action';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon from react-icons
import { FaTwitter } from 'react-icons/fa'; // Import Instagram icon from react-icons
import { FaLinkedin } from 'react-icons/fa'; // Import Instagram icon from react-icons
import { FaFacebook } from 'react-icons/fa'; // Import Instagram icon from react-icons

export default function SearchUserForm() {
  const [username, setUsername] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        // Call the server action to search for the user
        const user = await searchUserByName(username);
        if (user) {
            setResult(user.name); // Store the user's name
            setMessage('');
        } else {
            setResult(null); // Clear result if no user found
            setMessage('No user found');
        }
      } catch (error) {
        setMessage('Error searching for user');
      }
    });
  };

  return (
    <div className="bg-blue-400 w-full p-4 rounded-lg flex flex-col">
      <h1 className="text-white font-semibold mb-4 items-center">Social Accounts</h1>
      <form onSubmit={handleSearch} className="flex flex-col">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter userName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-1/2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mt-3"
        >
          {isPending ? 'Searching...' : 'Search'}
        </button>
      </form>
      {result && (
        <div>
        <div className="mt-4 text-white bg-blue-700 rounded p-3 font-bold flex items-center">
          <FaInstagram className="mr-2" /> {/* Instagram Icon */}
          <span>{result}</span> {/* Display the user's name */}
        </div>
        <div className="mt-4 text-white bg-blue-700 rounded p-3 font-bold flex items-center">
          <FaTwitter className="mr-2" /> {/* Instagram Icon */}
          <span>{result}</span> {/* Display the user's name */}
        </div>
        <div className="mt-4 text-white bg-blue-700 rounded p-3 font-bold flex items-center">
          <FaLinkedin className="mr-2" /> {/* Instagram Icon */}
          <span>{result}</span> {/* Display the user's name */}
        </div>
        <div className="mt-4 text-white bg-blue-700 rounded p-3 font-bold flex items-center">
          <FaFacebook className="mr-2" /> {/* Instagram Icon */}
          <span>{result}</span> {/* Display the user's name */}
        </div>
        </div>

         
      )}

      {/* Display message if no user is found */}
      {message && (
        <p className="mt-4 text-white font-semibold">{message}</p>
      )}
     
    </div>
  );
}
