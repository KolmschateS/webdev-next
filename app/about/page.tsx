import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-4xl font-bold text-center m-4'>Meet the developer</h1>
      {/* Image of developer */}
      < Image className='rounded-full shadow-neutral-500' src="/sebas.png" width={256} height={256} alt="Image of the developer"></Image>

      <h1 className='text-2xl font-bold text-center mt-10'>Sebastiaan Kolmschate</h1>

      {/* Social media */}
      <div className='flex flex-row items-center justify-center'>
        < Link href="https://www.linkedin.com/in/sebastiaan-kolmschate-66a2a3170/">
          <Image className='m-4' src="/linkedin.svg" width={48} height={48} alt="Linkedin"></Image>
        </Link>
        < Link href="https://github.com/KolmschateS">
          <Image className='m-4' src="/github.svg" width={48} height={48} alt="Github"></Image>
        </Link>
        < Link href="https://www.instagram.com/sebastiaankolmschate/" >
          <Image className='m-4' src="/instagram.svg" width={48} height={48} alt="Instagram"></Image>
        </Link>
      </div>
      
      {/* About me */}
      <div className='flex flex-col items-center'>
        <p>🇳🇱 From the Netherlands</p>
        <p>🏫 Studying Computer Science at the University of Applied Sciences Windesheim</p>
        <p>🤓 Interested in web development, machine learning and data science</p>
        <p></p>
      </div>

      {/* Skills */}
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-center m-4'>Skills</h1>
        <p>👨‍💻 Python, Java, C#, C++, JavaScript, TypeScript, HTML, CSS</p>
        <p>📚 React, Next.js, Node.js, Express.js, MongoDB, MySQL, GraphQL</p>
        <p>📈 Tensorflow, Keras, Scikit-learn, Pandas, Numpy, Matplotlib</p>
      </div>

      {/* Fun projects */}
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-center m-4'>Fun projects</h1>
        <p>⚙️ In progess of being added to this website</p>
      </div>

    </main>
  )
}
