import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
import { HiCheckBadge, IconName } from "react-icons/hi2";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SingleCourse = () => {
    const ref = React.createRef();
    const [courses, setCourses] = useState([])
    const { toggle } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/game-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (

        <section className={`${toggle ? "dark:bg-gray-900" : "dark:bg-gray-200 dark:text-gray-900"} p-4 dark:text-gray-100`}>

            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Every Skill of This Game</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Check out our service of every game.</p>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}><Link className='text-2xl absolute top-40 right-10 h-16 w-16 ...'><FaDownload></FaDownload></Link></button>}
                    </Pdf>

                </div>

                <div ref={ref} className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Ad vix debet docendi</h3>
                        <p className="mt-3 text-lg dark:text-gray-400">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Per ei quaeque sensibus</h4>
                                    <p className="mt-2 dark:text-gray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Cu imperdiet posidonium sed</h4>
                                    <p className="mt-2 dark:text-gray-400">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Nulla omittam sadipscing mel ne</h4>
                                    <p className="mt-2 dark:text-gray-400">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
                                </div>
                            </div>
                        </div>
                        <Link to='/premium' className="flex mt-10 overflow-hidden rounded-lg dark:bg-gray-800 dark:text-gray-100">
                            <div className="flex items-center justify-center px-4 dark:bg-yellow-400 dark:text-gray-800">
                                <HiCheckBadge className="text-4xl" ></HiCheckBadge>
                            </div>
                            <div className="items-center justify-between p-3">
                                <p className="text-2xl dark:text-yellow-400 font-semibold">Get Premium Subscribtion</p>
                                
                            </div>
                        </Link>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="https://www.kibrispdr.org/data/186/fotografi-keren-alone-58.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SingleCourse;