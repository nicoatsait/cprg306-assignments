import React from 'react';
import Navbar from '../navbar';
import NewItem from './new-item';
import Link from 'next/link';

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col p-24 bg-sky-400 " >
            <div>
                <Navbar />
            </div>
            <div>
                <NewItem />
            </div>
        </main>
    );
}