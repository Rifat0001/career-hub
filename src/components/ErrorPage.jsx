import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className='flex justify-center align-center items-center h-96 '>
            <div>
                <h2 className='font-bold text-6xl text-indigo-500 mb-8'>Page Not Found</h2>

            </div>
        </div>
    );
};

export default ErrorPage;