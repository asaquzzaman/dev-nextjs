import Post from "@/components/post"
import { getPosts } from '@/lib/posts'
import { getPost } from '@/lib/post'
import { useRouter } from 'next/router'

export default function PostContent( { post } ) {
    const router = useRouter();

    if ( router.isFallback ) {
        return (
            <h1>Loding....</h1>
        )
    }
    return (
        <Post post={ post } />
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
        }
    }
}