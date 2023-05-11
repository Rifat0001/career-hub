import React, { useEffect, useState } from 'react';

const JobInfo = () => {
    const [jobs, setJobs] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        fetch('job.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const handleSeeAll = () => {
        setSeeAll(true);
    }
    return (
        <div>
            {
                jobs.slice(0, seeAll ? 6 : 4).map(job =>
                (
                    <div key={job.index}>
                        <h1>{job.company_name}</h1>
                    </div>

                )
                )
            }
            {
                !seeAll && (<button onClick={handleSeeAll}>See All</button>)
            }
        </div>
    );
};

export default JobInfo;