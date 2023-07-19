import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image'

export default function SiteHeader() {
    const router = useRouter();
    return (
        <header className='text-[#ffffff80] bg-[#202C45]'>
            <div className='px-4 py-2'>
                <nav>
                    <div className='flex'>
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