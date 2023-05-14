import Image from 'next/image'

export default function Footer() {
    return (
        < footer>
            <div className='flex flex-col items-center p-24'>
                <Image src="/otb.svg" alt="Over the board" width={64} height={64}  />
                <h1 className='text-center text-2xl font-bold'>Over the board</h1>
                <Image className='blur-md' src="/otb-footer.svg" alt="Over the board" width={1000} height={1000}  />
            </div>`
        </footer>
    )
  }