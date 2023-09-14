
import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Nicholas Gonzalez </h1>
      <p>CPRG 306 A</p>
      <Link href="https://github.com/nicoatsait/cprg306-assignments">
        Link to GitHub Repository
      </Link>
    </div>
  );
};

export default StudentInfo;