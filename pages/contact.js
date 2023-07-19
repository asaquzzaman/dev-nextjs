import { Post } from '@/lib/request'
import SiteHeader from '@/components/siteheader'
import SideBar from '@/components/sidebar'
import Head from 'next/head'

const handelSubmit = async ( event ) => {
    event.preventDefault();

    const data = {
        firstName: event.target.firstname.value,
        lastName: event.target.lastname.value,
        message: event.target.message.value
    }

    const response = await Post( '/api/form', data );

}

export default function Contact() {
	return (
		<>
			<div className="page-container container mx-auto">
				<Head>
					<title>Contact - Personal Blog Template</title>    
				</Head>
				<SideBar />
				<div className='ml-[360px] w-[calc(100%-360px)] after:clear-both'>
					<SiteHeader />
					<div className='clear-both' />
					<main>
                        <div onSubmit={handelSubmit} className="container">
                            <form action="action_page.php">
                                <div>
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." /> 
                                </div>

                                <div>
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                </div>

                                <div>
                                    <label for="subject">Message</label>
                                    <textarea id="subject" name="message" placeholder="Write something.."></textarea>
                                </div>

                                <input type="submit" value="Submit" />
                            </form>
                        </div>
					</main>
				</div>
			</div>
		</>
	)
}
