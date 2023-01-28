import React, { useState } from 'react';

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
            <h1 className="text-center">Log In</h1>
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
          <div className="mb-4">
            <input type="checkbox" />
            <label className="pl-2">Keep me signed in</label>
          </div>
          <button
            className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full"
            type="submit">
            Log In
          </button>
          <div className="text-center border-t-2 border-gray-500 w-full">
            or
          </div>
          <button
            className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full"
            type="submit">
            Log in with Facebook
          </button>
          <button
            className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full"
            type="submit">
            Log in with Google
          </button>
          <button
            className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full"
            type="submit">
            Log in with Apple
          </button>
        </form>
      </div>
    </div>
  );
}
