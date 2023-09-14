import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

import StudentInfo from './StudentInfo';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center">
      <h1 className="text-6xl font-bold text-center">
          CPRG 306: Web Development 2 - Assignments
      </h1>
      <StudentInfo />
      <Link href="/week2">
        week2
      </Link>
      </div>
    </main>
  )
}
