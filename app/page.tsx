import dynamic from 'next/dynamic'

import Link from 'next/link';

export default function Home() {
  const Map = dynamic(
    () => import('@/components/Map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Brand text with a short subscription of the app */}
      <div className='mb-3 items-center'>
        < Link href="/game" className='bg-white text-black p-2 rounded-sm'>Create game</Link>
        <h2 className='text-2xl font-bold m-5 text-center'>Explore</h2>
      </div>
      <Map />
    </main>
  )
}