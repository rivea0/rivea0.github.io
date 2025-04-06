import Link from '@components/link'
import { GitHub, Mail, RSS, BuyMeACoffee, Mastodon } from '@components/icons'
import Tooltip from '@components/tooltip'
import styles from './social-links.module.css'

type SocialButtonProps = {
  href: string
  icon: React.ReactNode
  tooltip: string,
  rel?: string
}

function SocialButton({ 
  tooltip, href, icon, rel
}: SocialButtonProps) {
  return (
    <Tooltip text={tooltip}>
      <Link href={href} className={styles.icon} rel={rel}>
        {icon}
      </Link>
    </Tooltip>
  )
}

export default function Socials() {
  return (
    <div className={styles.socials}>
      <SocialButton
        href="https://github.com/rivea0"
        icon={<GitHub color={`var(--icon-generic-color)`} />}
        tooltip="GitHub"
      />
      <SocialButton
        href="mailto:e.e.ereneda@gmail.com"
        icon={<Mail color={`var(--icon-generic-color)`} />}
        tooltip="Email"
      />
      <SocialButton
        href="/feed.xml"
        icon={<RSS color={`var(--icon-generic-color)`} strokeWidth={1.6} />}
        tooltip="RSS"
      />
      <SocialButton
        href="https://www.buymeacoffee.com/rivea0"
        icon={<BuyMeACoffee color={`var(--icon-generic-color)`} />}
        tooltip="Buy Me a Coffee"
      />
      <SocialButton
        href="https://mastodon.social/@rivea0"
        icon={<Mastodon color={`var(--icon-generic-color)`} />}
        tooltip="Mastodon"
        rel="me"
      />
    </div>
  )
}
