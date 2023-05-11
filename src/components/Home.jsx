import React from 'react';
import Category from './Category';
import JobInfo from './JobInfo';

const Home = () => {
    return (
        <div className='md:px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center gap-4'>
                <div >
                    <h1 className='text-6xl font-bold md:mb-8 mb-4 leading-normal '>One Step Closer To Your {''}
                        <span className='text-purple-700'>Dream Job</span>
                    </h1>
                    <p className='font-bold mb-8 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn rounded bg-purple-500 md:px-4 md:py-3 px-1 py-1 text-white font-bold border-0'>Get Started</button>
                </div>
                <div>
                    <img src="/public/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </section>
            <div className="text-center pt-20 pb-8 font-bold">
                <h1 className="text-4xl mb-3 text-purple-600">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <Category></Category>
            <div className="text-center pt-20 pb-8 font-bold" id="featured_jobs">
                <h1 className="text-4xl mb-3 text-purple-600">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <JobInfo></JobInfo>
        </div>
    );
};

export default Home;