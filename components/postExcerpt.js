import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFolder, faComments } from '@fortawesome/free-solid-svg-icons'

export default function SinglePost( { post } ) {
    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <>
            <div className='pt-[20px] px-[15px]'>
                <div className='flex pb-[3rem] px-[1rem]'>
                    <div className='pl-[15px] pr-[30px] w-[35%]'>
                        <Image
                            alt=""
                            src={ `/blog-${randomIntFromInterval(1,7)}.jpg` }
                            width={300}
                            height={600}
                        />
                    </div>
                    <div className='px-[15px] w-[65%]'>
                        <h3 className='mb-[0.5rem]'><Link className='text-[1.75rem] text-[#202C45] font-[700] leading-[1.5]' href={ `/blog/${post.postId}` }>{ post.title }</Link></h3>
                        <div className='mb-[1rem]'>
                            <small className='mr-2'><FontAwesomeIcon icon={faCalendarDays} /> { post.date }</small>
                            <small className='mr-2'><FontAwesomeIcon icon={faFolder} /> {post.categories.nodes[0].name}</small>
                            <small className='mr-2'><FontAwesomeIcon icon={faComments} /> 0 Comments</small>
                        </div>
                        <div className='mb-[1rem]' dangerouslySetInnerHTML={{__html: post.excerpt}} />
                        <Link className='text-[#2A4B7C] font-[600]'  href={ `/blog/${post.postId}` }>Read More <i class="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}