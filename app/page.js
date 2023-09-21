import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

import StudentInfo from './StudentInfo';
import Navbar from './navbar';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-fuchsia-800">
      <Navbar />
      <div className="text-center">
      <h1 className="text-5xl font-bold">
          CPRG 306: Web Development 2 - Assignments
      </h1>
      <StudentInfo />
      <div className="mt-4">
        
      <Link className='"text-blue-500 hover:underline mr-4' href="/week2">
        week2
      </Link>
      <Link className='"text-blue-500 hover:underline mr-4' href="/week3">
        week3
      </Link>
      </div>
      </div>
      
      
      
    </main>
  )
}
