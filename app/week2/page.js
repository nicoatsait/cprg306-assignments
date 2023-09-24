

import React from 'react';
import StudentInfo from '../StudentInfo';
import Navbar from '../navbar';


const Week2 = () => {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-fuchsia-600 text-rose-950 ">
      <div>
      <Navbar />
      <h1 className="pt-5" >My Shopping List</h1>
      <StudentInfo />
    </div>
    </main>
    
  );
};

export default Week2;

