import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Home = () => {
    const { toggle } = useContext(AuthContext)
    return (
        <div >
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://cdn.mos.cms.futurecdn.net/2CUTixfNaGf5pMhc7WLmBa.jpg"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">

                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Everything you
                            <br className="hidden md:block" />
                            can imagine{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                is real
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            For every move of yours. We are there for you till the end. Every steps can change your end result so here we are for assist you to your every win. Keep playing with us.
                        </p>

                    </div>
                </div>
            </div>



            <section className={`${toggle ? "dark:bg-gray-800" : "dark:bg-gray-200 dark:text-gray-900"} p-4 py-10 dark:text-gray-100`}>
                <div className="container mt-5 mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://thebusinessofesports.com/wp-content/uploads/2021/06/gsmarena_001.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">First Person Shooting (FPS) Games</h3>
                            <p className="my-6 dark:text-gray-400">What FPS game means?
                                First-person shooter
                                First-person shooter (FPS) is a sub-genre of shooter video games centered on gun and other weapon-based combat in a first-person perspective, with the player experiencing the action through the eyes of the protagonist and controlling the player character in a three-dimensional space.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://cdn-uploads.gameblog.fr/img/news/404279_62da8bb531cbc.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-3xl font-bold">Football Games (FIFA)</h3>
                            <p className="my-6 dark:text-gray-400">In May, EA Sports and FIFA announced their partnership spanning over 20 years will come to an end in the summer of 2023. After months of negotiations regarding an extension of their current partnership, the two sides were unable to come to an agreement on future terms.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/15/771180388.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-3xl font-bold">Game of Creativity</h3>
                            <p className="my-6 dark:text-gray-400">What games increase creativity?
Ivanov says these improve our creative-thinking abilities. These include word searches, look-and-find games, Sudoku, and so on. “They all usually require you to approach a problem from a new or unexpected angle, thereby using new areas of your brain and opening your thinking up to new possibilities</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;