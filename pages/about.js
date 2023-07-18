import SiteHeader from '@/components/siteheader'
import SideBar from '@/components/sidebar'
import Head from 'next/head'

export default function About() {
	return (
		<>
			<div className="page-container container mx-auto">
				<Head>
					<title>About - Personal Blog Template</title>    
				</Head>
				<SideBar />
				<div className='ml-[360px] w-[calc(100%-360px)] after:clear-both'>
					<SiteHeader />
					<div className='clear-both' />
					<main>
						About content
					</main>
				</div>
			</div>
		</>
	)
}