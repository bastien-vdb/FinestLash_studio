import React from 'react';

function MessageSent(props) {
    return (
        <div className='flex items-center justify-center min-h-screen from-purple-500 via-indigo-500 to-pink-400 bg-gradient-to-br'>
            <div className='min-w-32 m-4 sm:w-full max-w-lg px-10 py-8 sm:mx-auto bg-white rounded-lg shadow-xl items-center justify-center flex flex-wrap gap-10'>
                <span className='text-2xl'>Message envoyé</span>
                <span className="p-1 inline-flex border bg-gray-200 rounded-md">
                    <button className="px-2 py-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>

                    </button>

                </span>
            </div>
        </div>
    );
}

export default MessageSent;