import Link from 'next/link'

export default function SinglePost( { post } ) {
    return (
        <div>
            <p><Link href={ `/blog/${post.postId}` }>{ post.title }</Link></p>
        </div>
    )
}