import React from 'react';

const FAQs = () => {

	return (
		<section className="dark:bg-gray-800 dark:text-gray-100">
			<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
				<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
				<p className="mt-4 mb-8 dark:text-gray-400">Questions our client always askes for.</p>
				<div className="space-y-4">
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Authentication</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Authentication is the process of determining whether someone or something is, in fact, who or what it says it is. Authentication technology provides access control for systems by checking to see if a user's credentials match the credentials in a database of authorized users or in a data authentication server. </p>
					</details>
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why do we have to responsive website</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Responsive design allows your website content to flow freely across all screen resolutions and sizes, and renders it to look great on all devices. It also makes it unnecessary to maintain different versions of your website for mobile and desktop and saves you time, resources and efforts. </p>
					</details>
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is React and why use it?</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM. </p>
					</details>
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is JavaScript in simple words?</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data. </p>
					</details>
				</div>
			</div>
		</section>
	);
};

export default FAQs;