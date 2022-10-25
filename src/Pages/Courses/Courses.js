import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/game-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h2>All courses: {courses.length}</h2>
            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 mb-10'>
                {
                    courses.map(course => <p
                        key={course.id}
                    >
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mb-10">
                            <img src={course.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide"><Link to={`/courses/${course.id}`}>{course.title}</Link></h2>
                                    <p className="dark:text-gray-100">{course.description}</p>
                                </div>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <Link to={`/courses/${course.id}`}>See Details</Link>
                                </button>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Courses;