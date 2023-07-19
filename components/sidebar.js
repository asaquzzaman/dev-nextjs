import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SideBar() {
    return ( 
        <div className='w-[360px] float-left fixed h-full bg-[#fff] overflow-auto p-[30px] text-center text-[#202C45]'>
            <div className='h-full flex flex-col'>
                <div className='w-[200px] h-[200px] relative rounded-full bg-[#2A4B7C] mx-auto mb-[1.5rem]'>
                    <Image
                        src="/mishu.jpg"
                        alt="Mishu"
                        width={200}
                        height={200}
                        className='absolute top-0 bottom-0 rounded-full p-[1rem] h-full w-full object-cover'
                    />
                </div>
                <h1 className='text-[2.5rem] font-bold mb-[0.5rem]'>Mishu</h1>
                <p className='mb-[1.5rem]'>
                    Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam justo
                </p>
                <div className='mb-[3rem]'>
                    <Link className='inline-block mr-[0.5rem] text-[#2A4B7C] py-[0.375rem] px-[0.75rem] border-[1px] border-solid border-[#2A4B7C]' href="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link className='inline-block mr-[0.5rem] text-[#2A4B7C] py-[0.375rem] px-[0.75rem] border-[1px] border-solid border-[#2A4B7C]' href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link className='inline-block mr-[0.5rem] text-[#2A4B7C] py-[0.375rem] px-[0.75rem] border-[1px] border-solid border-[#2A4B7C]' href="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    <Link className='inline-block mr-[0.5rem] text-[#2A4B7C] py-[0.375rem] px-[0.75rem] border-[1px] border-solid border-[#2A4B7C]' href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
                <Link className='py-[0.5rem] px-[1rem] w-full bg-[#2A4B7C] block text-[#fff] text-[1.25rem] mt-auto' href="">Hire Me</Link>
            </div>
        </div>
    )
}