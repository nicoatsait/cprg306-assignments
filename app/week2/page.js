

import React from 'react';
import StudentInfo from '../StudentInfo';
import Navbar from '../navbar';


const Week2 = () => {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-fuchsia-800   ">
      <div>
      <Navbar />
      <h1>My Shopping List</h1>
      <StudentInfo />
    </div>
    </main>
    
  );
};

export default Week2;

