import '@styles/global.css'
import { Inter } from 'next/font/google'
import SocialLinks from '@components/social-links'
import NavLinks from '@components/nav-links'
import Footer from '@components/footer'
import ThemeProvider from '@components/theme-provider'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>
              <div className={styles.heading}>
                <span className={styles.headingText}><h1>rivea0</h1></span>
                <SocialLinks />
              </div>
              <NavLinks />
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://rivea0.github.io'),
  title: {
    template: '%s | rivea0',
    default: 'rivea0',
  },
  description: 'My blog, projects, etc.',
  openGraph: {
    title: 'rivea0',
    description: 'My blog, projects, etc.',
    url: 'https://rivea0.github.io',
    siteName: 'rivea0',
    images: [
      '/img/opengraph-image.png'
    ],
    locale: 'en_US',
    type: 'website',
  },
}
