import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFolder, faComments } from '@fortawesome/free-solid-svg-icons'
import { Link, Button } from "@nextui-org/react";

export default function SinglePost( { post } ) {
    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const postContent = post.excerpt.replace( '[&hellip;]', '' );

    return (
        <>
            <div>
                <div className='flex pb-[3rem] px-[1rem] sm:flex-col'>
                    <div className='pl-[15px] pr-[30px] w-[35%] sm:w-full'>
                        <Image
                            alt=""
                            src={ `/blog-${randomIntFromInterval(1,7)}.jpg` }
                            width={800}
                            height={800}
                            className='h-[200px] w-[300px] sm:h-auto sm:w-full'
                        />
                    </div>
                    <div className='px-[15px] w-[65%] sm:w-full'>
                        <h3 className='mb-[0.5rem]'><Link className='text-[1.75rem] text-[#202C45] font-[700] leading-[1.5]' href={ `/blog/${post.postId}` }>{ post.title }</Link></h3>
                        <div className='mb-[1rem]'>
                            <small className='mr-2'><FontAwesomeIcon icon={faCalendarDays} /> { post.date }</small>
                            <small className='mr-2'><FontAwesomeIcon icon={faFolder} /> {post.categories.nodes[0].name}</small>
                            <small className='mr-2'><FontAwesomeIcon icon={faComments} /> 0 Comments</small>
                        </div>
                        <div className='mb-[1rem]' dangerouslySetInnerHTML={ { __html: postContent } } />
                    </div>
                </div>
                <div className='m-auto flex flex-row pb-4'>
                    { ( 
                        post.previous &&
                        <Button
                            href={ `/blog/${post.previous.postId}` }
                            as={Link}
                            color="primary"
                            showAnchorIcon
                            variant="solid"
                            size="sm"
                            className='mr-2'
                        >
                            Previous
                        </Button>
                    ) }
                    { ( 
                        post.next &&
                        <Button
                            href={ `/blog/${post.next.postId}` }
                            as={Link}
                            color="primary"
                            showAnchorIcon
                            variant="solid"
                            size="sm"
                        >
                            Next
                        </Button>
                    ) }
                </div>
            </div>
        </>
    )
}