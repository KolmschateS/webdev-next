import './globals.css'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GDPR from '@/components/GDPR'

export const metadata = {
  title: 'Over the board | Chess in person',
  description: 'Find people to play chess with in person.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""/>
          <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""></script>
      </head>
      <body className='bg-black'>
        <div className="flex flex-col min-h-screen">
          < Nav />

          {children}

          < Footer />
          <GDPR fullScreen={true} />
        </div>
      </body>
    </html>
  )
}
