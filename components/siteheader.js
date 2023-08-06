import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image'
import $ from 'jquery'

export default function SiteHeader() {
    const router = useRouter();

    return (
        <header className='text-[#ffffff80] bg-[#202C45] mb-12'>
            <div className='px-4 py-2'>
                <nav>
                    <div className='lg:hidden'>
                        <button 
                            type="button" 
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                            aria-controls="mobile-menu" 
                            aria-expanded="false"
                            onClick={ () => {
                                if ( $( '.mobile-button-wrap' ).is(':visible') ) {
                                    $( '.mobile-button-wrap' ).slideUp(500);
                                } else {
                                    $( '.mobile-button-wrap' ).slideDown(500);
                                }
                            } }
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className='mobile-button-wrap hidden'>
                            <div className='m-auto flex flex-col'>
                                <Link className={ `p-2 ${router.pathname == "/" ? "text-[#fff]" : ""}` } href="/">Home</Link>
                                <Link className={ `p-2 ${router.pathname == "/about" ? "text-[#fff]" : ""}` } href="/about">About</Link>
                                <Link className={ `p-2 ${router.pathname == "/contact" ? "text-[#fff]" : ""}` } href="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:hidden'>
                        <div className='m-auto flex'>
                            <Link className={ `p-2 ${router.pathname == "/" ? "text-[#fff]" : ""}` } href="/">Home</Link>
                            <Link className={ `p-2 ${router.pathname == "/about" ? "text-[#fff]" : ""}` } href="/about">About</Link>
                            <Link className={ `p-2 ${router.pathname == "/contact" ? "text-[#fff]" : ""}` } href="/contact">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='bg-[url(/banner.jpg)] h-[300px] w-full bg-no-repeat bg-[0_68%]'>
                {/* <Image
                    src="/banner.jpg"
                    width={400}
                    height={300}
                    alt="Site Banner"
                    className='absolute top-0 bottom-0 w-full'
                /> */}
            </div>
        </header>
    )
}