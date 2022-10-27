import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {


	const { user, logOut, setToggle, toggle } = useContext(AuthContext)

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(error => console.error(error))
	}

	return (
		<header className={`${toggle ? "dark:bg-gray-800" : "dark:bg-gray-200 dark:text-gray-900"} p-4 dark:text-gray-100`}>
			<div className="container flex justify-between h-16 mx-auto">

				<Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
					
					<img className='h-20 pr-0' src={logo} alt="" />
					<h2>Game Tricks</h2>
				</Link>
				<ul className="items-stretch hidden space-x-3 lg:flex">
					<li className="flex">
						<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
					</li>
					<li className="flex">
						<Link rel="noopener noreferrer" to="/courses" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Courses</Link>
					</li>
					<li className="flex">
						<Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
					</li>
					<li className="flex">
						<Link rel="noopener noreferrer" to="/faq" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ's</Link>
					</li>

					<label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">

						<span className="relative">
							<input onClick={() => setToggle (!toggle)} id="Toggle1" type="checkbox" className="hidden peer" />
							<div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
							<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
						</span>

					</label>

				</ul>
				<div className="items-center flex-shrink-0 hidden lg:flex">

					{
						user?.uid ?
							
							<div className='flex'>
								<Link><button className=" self-center px-4 py-3 font-bold rounded dark:bg-violet-400 dark:text-gray-900 flex gap-x-2">
									<div>
										{user?.displayName}
									</div>
									<div>
										{user?.photoURL ?
											<img className='rounded-2xl h-7'
												src={user?.photoURL} />

											: <FaUserCircle></FaUserCircle>
										}
									</div>
								</button></Link>
								<Link className='text-2xl'><button onClick={handleLogOut} className='pt-3 pl-3'><HiOutlineLogout></HiOutlineLogout></button></Link>
							</div>
							:
							<div>
								<Link to='/login'><button className="self-center px-3 py-3 rounded">Log in</button></Link>
								/
								<Link to='/register'><button className="self-center px-3 py-3 rounded">Register</button></Link>

							</div>
							
					}
				</div>

			</div>
		</header>
	);
};

export default Header;