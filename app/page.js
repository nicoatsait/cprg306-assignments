import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

import StudentInfo from './StudentInfo';
import Navbar from './navbar';
export default function Home() {
  return (
    <main className="text-rose-950 flex min-h-screen flex-col items-center p-24 bg-sky-400   ">
      <Navbar />
      <div className="text-center pt-10">
        <h1 className="text-5xl font-bold pb-2">
            CPRG 306: Web Development 2 - Assignments
        </h1>
        <StudentInfo />
        <div className="mt-2">
        
        <Link className='"text-blue-500 hover:underline mr-4' href="/week2">
          week2
          </Link>
        <Link className='"text-blue-500 hover:underline mr-4' href="/week3">
          week3
        </Link>
        <Link className='"text-blue-500 hover:underline mr-4' href="/week4">
          week4
        </Link>
        <Link className='"text-blue-500 hover:underline mr-4' href="/week5">
          week5
        </Link>
        <Link className='"text-blue-500 hover:underline mr-4' href="/week6">
          week6
        </Link>
        <Link className='"text-blue-500 hover:underline mr-4' href="/week7">
          week7
        </Link>
        <Link className='"text-blue-500 hover:underline mr-4' href="/week8">
          week8
        </Link>
        <Link className='"text-blue-500 hover:underline mr-4' href="/week10">
          week10
        </Link>
        

        </div>
      </div>
    </main>
  )
}
