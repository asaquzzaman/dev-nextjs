import Link from 'next/link'
import Image from 'next/image'

export default function SideBar() {
    return ( 
        <div className='w-[360px] float-left fixed'>
            <div>
                <Image
                    src="/mishu.jpg"
                    alt="Mishu"
                    width={200}
                    height={10}
                />
                <h1>Kate Glover</h1>
                <p>
                    Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam justo
                </p>
                <div>
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                </div>
                <Link href="">Hire Me</Link>
            </div>
            <div>
                <i className="fas fa-2x fa-angle-double-right"></i>
            </div>
        </div>
    )
}