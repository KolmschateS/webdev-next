import Link from 'next/link';

import Map from '@/components/Maps/static/Map';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Brand text with a short subscription of the app */}
      <div className='mb-3 items-center'>
        < Link href="/event/new" className='bg-white text-black p-2 font-bold'>Create event</Link>
        <h2 className='text-2xl font-bold m-5 text-center'>Explore</h2>
      </div>
      <Map height='60vh' width='100%' pick={false}/>
    </main>
  )
}