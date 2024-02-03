import Link from '@components/link'
import { GitHub, Mail, RSS, BuyMeACoffee, Dev } from '@components/icons'
import Tooltip from '@components/tooltip'
import ThemeSwitcher from '@components/theme-switcher'
import styles from './social-links.module.css'

type SocialButtonProps = {
  href: string
  icon: React.ReactNode
  tooltip: string
}

function SocialButton({ 
  tooltip, href, icon 
}: SocialButtonProps) {
  return (
    <Tooltip text={tooltip}>
      <Link href={href} className={styles.icon}>
        {icon}
      </Link>
    </Tooltip>
  )
}

export default function Socials() {
  return (
    <div className={styles.socials}>
      <ThemeSwitcher />
      <SocialButton
        href="https://github.com/rivea0"
        icon={<GitHub color={`var(--icon-github-color)`} />}
        tooltip="GitHub"
      />
      <SocialButton
        href="mailto:e.e.ereneda@gmail.com"
        icon={<Mail color={`var(--link)`} />}
        tooltip="Email"
      />
      <SocialButton
        href="/feed.xml"
        icon={<RSS color={`var(--icon-rss-color)`} strokeWidth={1.6} />}
        tooltip="RSS"
      />
      <SocialButton
        href="https://dev.to/rivea0"
        icon={<Dev color="none" fillColor={`var(--icon-dev-fill-color)`} viewBox='0 0 30 30' />}
        tooltip="DEV.to"
      />
      <SocialButton
        href="https://www.buymeacoffee.com/rivea0"
        icon={<BuyMeACoffee color={`var(--icon-buy-me-a-coffee-color)`} />}
        tooltip="Buy Me a Coffee"
      />
    </div>
  )
}
