import React from 'react';
import { Link } from 'react-router-dom';
import { GiAk47, GiAwareness, GiConsoleController, GiMachineGunMagazine, GiMagicPalm} from "react-icons/gi";
import { FaUserNinja } from 'react-icons/fa';

const CourseSidebar = () => {
    return (
        <div>
            <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className='text-2xl'>Game Tricks</h2>
                    </div>
                    
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 ">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GiConsoleController className='text-2xl'></GiConsoleController>
                                    <span className='font-bold'>Best Control</span>
                                </Link>
                            </li>
                            <li className="items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 ">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GiAk47 className='text-2xl'></GiAk47>
                                    <span className='font-bold'>Aim Training</span>
                                </Link>
                            </li>
                            <li className="items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 ">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GiMachineGunMagazine className='text-2xl'></GiMachineGunMagazine>
                                    <span className='font-bold'>Basic Tutorial</span>
                                </Link>
                            </li>
                            <li className="items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 ">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GiAwareness className='text-2xl'></GiAwareness>
                                    <span className='font-bold'>Better Reflex</span>
                                </Link>
                            </li>
                            
                            <li className="items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 ">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaUserNinja className='text-2xl'></FaUserNinja>
                                    <span className='font-bold'>Team Bonding</span>
                                </Link>
                            </li>
                            <li className="items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 ">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GiMagicPalm className='text-2xl'></GiMagicPalm>
                                    <span className='font-bold'>Guide Line</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CourseSidebar;