// 'use client'
// import React from 'react'
// import  {signIn}  from '../actions/signIn'
// type Props = {}

// const login = (props: Props) => {
//   const handleSignIn = async () => {
//     try {
//       await signIn("github");
//     } catch (error) {
//       console.error('Error during sign-in:', error);
//     }
//   };
//   return (
//     <div onClick={handleSignIn}  className='w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-black rounded-md flex items-center  w-1/3'>
//         <p className='text-white'>Login with Github</p>
//     </div>
//   )
// }

// export default login

'use client'
import React from 'react';
import { signIn } from 'next-auth/react';

type Props = {}

const Login = (props: Props) => {
  const handleSignIn = async () => {
    try {
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div onClick={handleSignIn} className='w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-black rounded-md flex items-center w-1/3'>
      <p className='text-white'>Login with Github</p>
    </div>
  );
}

export default Login;
