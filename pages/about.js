import SiteHeader from '@/components/siteheader'
import SideBar from '@/components/sidebar'
import PostList from '@/components/postList';
import Head from 'next/head'
import { useState } from 'react';
import { Post } from '@/lib/request'
import emailjs from '@emailjs/browser';

export default function Contact( { posts } ) {
	return (
		<>
			<div className="page-container container mx-auto">
				<Head>
					<title>Bloggy - Personal Blog Template</title>    
				</Head>
				<div className='w-[360px] float-left fixed h-full bg-[#fff] overflow-auto p-[30px] text-center text-[#202C45] top-0 sm:relative sm:w-full'>
					<SideBar />
				</div>
				<div className='ml-[360px] w-[calc(100%-360px)] after:clear-both sm:float-left sm:w-full sm:ml-0'>
					<div className='m-8 bg-[#fff]'>
						<SiteHeader />
						<div className='p-12 pt-0'>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of the Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from the Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
						</div>
					</div>
				</div>
			</div>
		</>
	)
}