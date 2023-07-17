import Link from 'next/link'

export default function Post( { post } ) {
    return (
        <div>
            <p><Link href={ `/blog/${post.postId}` }>{ post.title }</Link></p>
        </div>
    )
}