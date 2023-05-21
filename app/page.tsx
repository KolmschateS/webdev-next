import dynamic from 'next/dynamic'

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
      <h1 className="text-4xl font-bold text-center pt-20">
        Over the board
      </h1>
      <p className="text-center pb-10">
        Find people to play chess with in person.
      </p>
      <h2 className='text-2xl font-bold pb-5'>Explore</h2>
      <Map />
    </main>
  )
}