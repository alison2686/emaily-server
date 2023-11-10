import React from 'react';

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-blue-50 flex flex-col'>
      <header className='text-center p-6 bg-blue-100 border-b border-blue-200'>
        <h1 className='text-4xl text-blue-700 font-bold'>Welcome to Emaily</h1>
      </header>
      <main className='flex-1 max-w-4xl mx-auto p-8'>
        <h2 className='text-2xl text-blue-700 font-bold mb-4'>
          What is Emaily?
        </h2>
        <p className='text-blue-600'>
          Emaily is a web app that allows you to send surveys to your users and
          collect feedback. It is a full-stack application built with React,
          Node.js, Express and MongoDB.
        </p>
      </main>
      <footer className='text-center p-4 bg-blue-100 border-t border-blue-200'>
        <p className='text-blue-600'>
          &copy; 2023 Travel Route. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
