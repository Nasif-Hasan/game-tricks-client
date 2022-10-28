import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Premium = () => {
    const { toggle, user } = useContext(AuthContext);
    return (
        <section className={`${toggle ? "dark:bg-gray-900" : "dark:bg-gray-200 dark:text-gray-900"} py-10 dark:text-gray-100`}>
            <div className="flex flex-col max-w-lg p-6 mx-auto space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-100">
            <h2 className='text-5xl  font-bold'>Checkout Card</h2>
                <div className="flex space-x-4">
                {user?.photoURL ?
											<img className='rounded-xl h-7'
												src={user?.photoURL} />

											: <FaUserCircle className='text-4xl'></FaUserCircle>
										}
                    <div className="flex flex-col space-y-1">
                        <Link rel="noopener noreferrer" to="#" className="text-2xl font-semibold">{user?.displayName}</Link>
                        
                    </div>
                </div>
                <div>
                    <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
                    <p className="text-sm dark:text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
                </div>
                
            </div>
        </section>
    );
};

export default Premium;