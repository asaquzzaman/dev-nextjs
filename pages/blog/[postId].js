import Post from "@/components/singlePost"
import { getPosts } from '@/lib/posts'
import { getPost } from '@/lib/post'
import { useRouter } from 'next/router'
import SiteHeader from '@/components/siteheader'
import SideBar from '@/components/sidebar'
import PostList from '@/components/postList';
import Head from 'next/head'

export default function PostContent( { post } ) {
    const router = useRouter();

    if ( router.isFallback ) {
        return (
            <h1>Loding....</h1>
        )
    }
    return (
        <>
			<div className="page-container container mx-auto">
				<Head>
					<title>{ post.title }</title>    
				</Head>
				<div className='w-[360px] float-left fixed h-full bg-[#fff] overflow-auto p-[30px] text-center text-[#202C45] top-0 sm:relative sm:w-full'>
					<SideBar />
				</div>
				<div className='ml-[360px] w-[calc(100%-360px)] after:clear-both sm:float-left sm:w-full sm:ml-0'>
					<div className='m-8 bg-[#fff]'>
						<SiteHeader />
						<div>
                            <Post post={ post } />
						</div>
					</div>
				</div>
			</div>
		</>
    )
}

export async function getStaticPaths() {
    const posts = await getPosts();
    const paths = posts.nodes.map( post => {
        return {
            params: {
                postId: `${post.postId}`
            }
        }
    } )
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps( context ) {
    const { params } = context;
    const post = await getPost( params.postId );

    return {
        props: {
            post
        },
        revalidate: 10,
    }
}