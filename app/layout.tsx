import '@styles/global.css'
import { Inter } from 'next/font/google'
import NavLinks from '@components/nav-links'
import Footer from '@components/footer'
import ThemeProvider from '@components/theme-provider'
import styles from './layout.module.css'
import siteConfig from '../siteConfig.json'
import { GCScript } from 'next-goatcounter';
import ThemeSwitcher from '@components/theme-switcher'

const inter = Inter({ subsets: ['latin'], weight: ['300', '500', '600', '700'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
        <GCScript siteUrl={`https://${siteConfig.GC}.goatcounter.com/count`} />
          <div className={styles.wrapper}>
            <main className={styles.main}>
              <div className={styles.heading}>
                <span className={styles.headingText}><h1>Eda Eren</h1></span>
                <ThemeSwitcher className={styles.themeSwitcher} hideTooltip />
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
    template: '%s | Eda Eren',
    default: 'Eda Eren',
  },
  description: 'My blog, projects, etc.',
  openGraph: {
    title: 'Eda Eren',
    description: 'My blog, projects, etc.',
    url: 'https://rivea0.github.io',
    siteName: 'Eda Eren',
    images: [
      '/img/opengraph-image.png'
    ],
    locale: 'en_US',
    type: 'website',
  },
}
