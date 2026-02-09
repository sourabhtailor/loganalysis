import React from 'react';
import Layout from './Layout';

function PageNotFound() {
  return (
    <Layout>
      <div className="h-[400px] flex flex-col justify-center items-center border-2 border-black p-5 text-center">
        <h1 className="mb-5 text-[50px]">404 Error - Page Not Found</h1>
        <a
          href="/"
          className="bg-[#FF3C00] text-white px-5 py-2.5 rounded no-underline"
        >
          Back to Home Page
        </a>
      </div>
    </Layout>
  );
}

export default PageNotFound;
