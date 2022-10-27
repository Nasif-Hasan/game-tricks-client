import React from 'react';

const Home = () => {
    return (
        <div>
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
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Everything you
                            <br className="hidden md:block" />
                            can imagine{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                is real
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                        
                    </div>
                </div>
            </div>



            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mt-5 mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://thebusinessofesports.com/wp-content/uploads/2021/06/gsmarena_001.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://cdn-uploads.gameblog.fr/img/news/404279_62da8bb531cbc.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/15/771180388.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;