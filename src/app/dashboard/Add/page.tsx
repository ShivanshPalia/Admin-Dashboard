
'use client';
import React from 'react';
import { createUser } from '@/app/actions/action';

const AddUser = () => {
  return (
    <div className="min-h-screen bg-[#2c2c2c] flex items-center justify-center">
      <div className="bg-[#3b3b3b] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Add New User</h2>
        <form action={createUser} className='space-y-4'>
          <input 
            placeholder='Enter name' 
            name='name'  
            type='text' 
            className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
            required
          />
          <input 
            placeholder='Enter email' 
            type='email' 
            name='email'  
            className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
            required
          />
          <input 
            placeholder='Enter phone number' 
            type="text" 
            name='phone' 
            className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
            required
          />
          <input 
            placeholder='Enter address' 
            type="text" 
            name='address' 
            className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
            required
          />
          <input 
            placeholder='Enter role' 
            type="text" 
            name='role' 
            className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
          />
          <input 
            placeholder='Enter Date of Birth' 
            type="date" 
            name='dateOfBirth' 
            className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
          />
          <input 
            placeholder='Enter password' 
            type="password" 
            name='password' 
            className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
            required
          />
          <button 
            type='submit' 
            className='w-full bg-[#2e374a] text-white p-3 rounded hover:bg-[#9ae3b0] transition-colors'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;


