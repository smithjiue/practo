import { Lato } from 'next/font/google'
import './globals.css'
import { SearchProvider } from '@/context/SearchContext'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

export const metadata = {
  title: 'Practo - Your home for health',
  description: 'Find and book appointments with the best doctors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  )
}
