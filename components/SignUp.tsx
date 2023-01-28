import React, { useState } from 'react';
import { AiFillFacebook, AiFillApple } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Perform login logic here
  };

  return (
    <div className="p-5">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="text-center text-4xl">Log In</h1>
          </div>
          <div className="mb-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-between space-x-10">
            <div>
              <input type="checkbox" />
              <label className="pl-2">Keep me signed in</label>
            </div>
            <div>
              <Link href={''}>Forgot Password?</Link>
            </div>
          </div>
          <button
            className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full"
            type="submit">
            Log In
          </button>
          <div className="text-center border-t-2 border-gray-500 w-full p-2"></div>
          <div className="mb-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded inline-flex items-center">
              <AiFillFacebook />
              <span>Log in with Facebook</span>
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded inline-flex items-center">
              <FaGoogle />
              <span>Log in with Google</span>
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-black text-white font-bold py-2 px-4 w-full rounded inline-flex items-center">
              <AiFillApple />
              <span>Log in with Apple</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
