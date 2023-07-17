import { getPosts } from '@/lib/posts';
import BlogHome from '@/components/BlogInit';

export default function Blog( { posts } ) {
    return (
        <BlogHome posts={ posts } />
    )
}

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    }
}
