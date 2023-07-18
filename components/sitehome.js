import SiteHeader from '@/components/siteheader'
import SideBar from '@/components/sidebar'
import BlogHome from '@/components/blogposts';
import Head from 'next/head'

export default function Home( { posts } ) {
	return (
		<>
			<div className="page-container container mx-auto">
				<Head>
					<title>Bloggy - Personal Blog Template</title>    
				</Head>
				<SideBar />
				<div className='ml-[360px] w-[calc(100%-360px)] after:clear-both'>
					<SiteHeader />
					<div className='clear-both' />
					<main>
						<BlogHome posts={ posts } />
					</main>
				</div>
			</div>
		</>
	)
}