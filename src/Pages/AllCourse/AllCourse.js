import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllCourse = () => {
    const { toggle } = useContext(AuthContext);
    return (
        <section className={`${toggle ? "dark:bg-gray-800" : "dark:bg-gray-200 dark:text-gray-900"} p-4 dark:text-gray-100`}>
            <div className="container mx-auto p-4 py-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Our Services</h2>
                <p className="dark:text-gray-400">We try to make your game easy.</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Best Control</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Every setting is important</p>
                        <p>This can be game changer</p>
                        <p>Best use of all buttons</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Aim Training</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Aim to the Head</p>
                        <p>Control recoil</p>
                        <p>Practice with bots</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Basic Tutorial</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Daily essential Video tutorial</p>
                        <p>Best contents for game</p>
                        <p>Basic info of game</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Better Reflex</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Important for Survive in game</p>
                        <p>Fps game tutorial on reflex</p>
                        <p>Move character fast</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Team Bonding</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Help teammates and get help</p>
                        <p>Communication is important</p>
                        <p>Support can lead to win</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Guide Line</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Teaching with best players </p>
                        <p>Video lesson and layouts</p>
                        <p>Always open support session </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllCourse;