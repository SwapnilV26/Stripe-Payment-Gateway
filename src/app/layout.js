import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Payment Gateway',
  description: 'Implementation of payment gateway with Stripe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
