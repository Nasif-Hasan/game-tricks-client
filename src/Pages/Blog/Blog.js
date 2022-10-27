import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 ">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Our Game Tricks Blogs</h2>
                    
                </div>

                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                            <img src="https://miro.medium.com/max/1400/0*heiz7awNkQ1B0O8e.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What is Cors?</h3>
                                
                                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                            </div>
                        </Link>
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                                <img role="presentation" alt='' className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://firebase.google.com/images/social.png" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Why are you using firebase? What other options do you have to implement authentication?</h3>
                                    
                                    <p>Firebase is an app development platform that helps us build and grow apps and games. It is a very Beginner friendly authentication system. There are many other options available too like MongoDB, Amazon Redshift, Oracle Database etc.</p>
                                </div>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                                <img role="presentation" alt='' className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/885819/0821-RoleBasedAuthFirebase-Luke_Social-0ec228e955294dc10aca08ce13328e4d.png" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does the private route work?</h3>
                                    
                                    <p>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>
                                </div>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                                <img role="presentation" alt='' className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is Node? How does Node work?</h3>
                                    
                                    <p>Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p>
                                </div>
                            </Link>
                            
                        </div>
                        
                    </div>
                </section>


            </section>
        </div>
    );
};

export default Blog;