import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'


export default function App() {
    const [menuOpenState, setMenuOpenState] = useState(false)
    const showSettings = function () {
        console.log('asdlkjfahldfkj');
        setMenuOpenState( !!menuOpenState )
    }

    console.log( menuOpenState );
  return (
    <header className='text-[#ffffff80] bg-[#202C45]'>
        <div className='px-4 py-2'>
            <nav className="bg-gray-800">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>


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
        </div>
    </header>
  );
}

