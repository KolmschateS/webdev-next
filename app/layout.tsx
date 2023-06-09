import './globals.css'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GDPR from '@/components/GDPR'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
