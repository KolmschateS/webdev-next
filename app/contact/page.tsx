import Link from 'next/link'

import { handleForm } from './actions'

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold">Contact</h1> 
        <p>Get in touch with the developer</p> 
        <Link href={"/about"} className="fond-bold underline">Sebastiaan Kolmschate</Link> 

        <form className="bg-white text-black p-6" action={handleForm}>
          <div className='form'>
            <label htmlFor="subject" className="block font-bold">Subject</label>
            <input name='subject' className="border-2 border-black" type="text" required maxLength={200}/>
          </div>
          <div className="mt-3" >
            <label htmlFor="email" className="block font-bold">Email</label>
            <input name='email' className="border-2 border-black" type="email" />
          </div>
          <div className="mt-3" >
            <label htmlFor="message" className="block font-bold">Message</label>
            <textarea name='message' className="border-2 border-black" required maxLength={600} />
          </div>
          {/* < Captcha /> */}
          <div className="mt-3" >
            <button className="bg-black text-white p-2">Send</button>
          </div>
        </form>
      </main>
    )
  }