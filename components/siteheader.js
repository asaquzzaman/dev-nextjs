import Link from 'next/link'
import { useRouter } from 'next/router';

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
        </header>
    )
}