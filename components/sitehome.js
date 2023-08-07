import SiteHeader from '@/components/siteheader'
import SideBar from '@/components/sidebar'
import PostList from '@/components/postList';
import Head from 'next/head'
import Image from 'next/image'

export default function Home( { posts } ) {
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
					<div className='m-8 sm:m-0 sm:mt-8 bg-[#fff]'>
						<SiteHeader />
						<main>
							<PostList posts={ posts } />
						</main>
					</div>
				</div>
			</div>
		</>
	)
}