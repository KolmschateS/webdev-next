import Link from 'next/link'

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold">Contact</h1> 
        <p>get in touch with the developer</p> 
        <Link href={"/about"} className="fond-bold underline">Sebastiaan Kolmschate</Link> 

        <div className="bg-white text-black p-6">
          <div>
            <p className="font-bold">Subject</p>
            <input className="border-2 border-black" type="text" />
          </div>
          <div className="mt-3" >
            <p className="font-bold">Name</p>
            <input className="border-2 border-black" type="text" />
          </div>
          <div className="mt-3" >
            <p className="font-bold">Email</p>
            <input className="border-2 border-black" type="email" />
          </div>
          <div className="mt-3" >
            <p className="font-bold">Message</p>
            <textarea className="border-2 border-black" />
          </div>
          {/* < Captcha /> */}
          <div className="mt-3" >
            <button className="bg-black text-white p-2">Send</button>
          </div>
        </div>
      </main>
    )
  }