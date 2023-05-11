import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className='flex justify-center align-center items-center h-96 '>
            <div>
                <h2 className='font-bold text-3xl text-indigo-500 mb-8'>Page Not Found</h2>
                <button className='btn px-8 bg-indigo-500' onClick={handleBack}>Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;