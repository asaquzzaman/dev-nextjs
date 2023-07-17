import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Post from '@/components/post';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { getPosts } from '@/lib/posts';
import { Pagination } from "@nextui-org/react";


export default function BlogHome( { posts } ) {
    const router = useRouter();

    if ( router.isFallback ) {
        return (
            <h1>Loding....</h1>
        )
    }

    return (
        <div>
            {
                posts.nodes.map( ( post ) => {
                    return (
                        <Post 
                            key={ post.slug } 
                            post={ post } 
                        />
                    )
                } )
            }

            <Pagination 
                total={ Math.ceil( parseInt( posts.pageInfo.offsetPagination.total ) / parseInt( process.env.NEXT_PUBLIC_PER_PAGE ) ) } 
                initialPage={ 1 }
                page={ typeof router.query.pageId === 'undefined' ? 1 : parseInt( router.query.pageId ) } // Active page number
                onChange={ async ( page ) => {
                    //const Posts = await getPosts( (( page-1 ) * parseInt( process.env.NEXT_PUBLIC_PER_PAGE ) ) );
                    // setPosts( [...Posts.nodes] );

                    router.replace( `/blog/page/${page}` )
                } }
            />
        </div>
    )
}