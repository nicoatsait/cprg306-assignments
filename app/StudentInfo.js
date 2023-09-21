
import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Nicholas Gonzalez </h1>
      <p>CPRG 306 F</p>
      <Link className="text-blue-500 hover:underline mr-4" href="https://github.com/nicoatsait/cprg306-assignments">
        Link to GitHub Repository
      </Link>
    </div>
  );
};

export default StudentInfo;