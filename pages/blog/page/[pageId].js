import BlogHome from '@/components/BlogInit';
import { getPosts } from '@/lib/posts';

export default function Blog( { posts } ) {
    return (
        <BlogHome posts={ posts } />
    )
}

export async function getStaticPaths() {
    const posts     = await getPosts();
    const totalPage = Math.ceil( parseInt( posts.pageInfo.offsetPagination.total ) / parseInt( process.env.NEXT_PUBLIC_PER_PAGE ) )
    const pages     = Array.from({ length: totalPage }, (_, i) => i + 1);
    
    const paths = pages.map( page => {
        return {
            params: {
                pageId: `${page}`
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
    const posts = await getPosts( ( params.pageId - 1 ) * parseInt( process.env.NEXT_PUBLIC_PER_PAGE ) );

    return {
        props: {
            posts
        }
    }
}