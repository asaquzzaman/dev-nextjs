import { getPosts } from '@/lib/posts';
import SiteHome from '@/components/sitehome'

export default function Home( { posts } ) {
	return (
		<>
			<SiteHome posts={ posts } />
		</>
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
