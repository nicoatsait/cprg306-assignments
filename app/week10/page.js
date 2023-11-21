'use client';
import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import { useEffect } from 'react';  
import Layout from './layout'; 

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Define a function to handle GitHub sign-in
  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn(); // Call the GitHub sign-in function
    } catch (error) {
      console.error('GitHub Sign-In Error:', error);
    }
  };

  return (
    <Layout> 
      <div>
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <img className='w-16 ' src={user.photoURL} />
            <p>Your user id is: {user.uid} {user.displayName}</p>
            <button onClick={firebaseSignOut}>Logout</button>
            <a className='ml-2' href="/week10/shopping-list">Go to Shopping List</a>
          </div>
        ) : (
          <div>
            <button onClick={handleGitHubSignIn}>Login with GitHub</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
