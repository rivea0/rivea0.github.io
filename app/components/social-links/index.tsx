import Link from '@components/link'
import { GitHub, Mail, RSS } from '@components/icons'
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
        icon={<GitHub strokeWidth={2} />}
        tooltip="GitHub"
      />
      <SocialButton
        href="mailto:e.e.ereneda@gmail.com"
        icon={<Mail strokeWidth={2} />}
        tooltip="Email"
      />
      {/* <SocialButton
        href=""
        icon={<BuyMeACoffee />}
        tooltip="Buy Me a Coffee"
      /> */}
      <SocialButton
        href="/feed.xml"
        icon={<RSS strokeWidth={2} />}
        tooltip="RSS"
      />
    </div>
  )
}
