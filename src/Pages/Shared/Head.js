import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';

const Head = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user, logOut, setToggle, toggle } = useContext(AuthContext)

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(error => console.error(error))
	}
	return (
		<header className="dark:bg-gray-800 dark:text-gray-100">
			<div class="relative flex items-center justify-between">
				<Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">

					<img className='h-20 pr-0' src={logo} alt="" />
					<h2 className='text-2xl'>Game Tricks</h2>
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
							<input onClick={() => setToggle(!toggle)} id="Toggle1" type="checkbox" className="hidden peer" />
							<div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
							<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
						</span>

					</label>

				</ul>
				<div className="items-center flex-shrink-0 hidden lg:flex">

					{
						user?.uid ?

							<div data-tip={user?.displayName} className='flex'>
								<ReactTooltip />
								<Link><button className=" self-center px-4 py-3 font-bold rounded dark:bg-violet-400 dark:text-gray-900 flex gap-x-2">
									<div>
										{user?.displayName}
									</div>
									<div>
										{user?.photoURL ?
											<img className='rounded-2xl h-7'
												src={user?.photoURL} />

											: <FaUserCircle className='text-2xl'></FaUserCircle>
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
				<div class="lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
						onClick={() => setIsMenuOpen(true)}
					>
						<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							/>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							/>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div class="absolute top-0 left-0 w-full">
							<div class="p-5 dark:bg-gray-800 dark:text-gray-100 border rounded shadow-sm">
								<div class="flex items-center justify-between mb-4">
									<Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">

										<img className='h-20 pr-0' src={logo} alt="" />
										<h2>Game Tricks</h2>
									</Link>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
											onClick={() => setIsMenuOpen(false)}
										>
											<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul class="space-y-4">
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
										
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Head;