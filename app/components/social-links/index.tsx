import Link from '@components/link';
import { GitHub, Mail, RSS, Mastodon } from '@components/icons';
import Tooltip from '@components/tooltip';
import styles from './social-links.module.css';
import Bluesky from '@components/icons/bluesky';

type SocialButtonProps = {
  href: string;
  icon: React.ReactNode;
  tooltip: string;
  rel?: string;
};

function SocialButton({ tooltip, href, icon, rel }: SocialButtonProps) {
  return (
    <Tooltip text={tooltip}>
      <Link href={href} className={styles.icon} rel={rel}>
        {icon}
      </Link>
    </Tooltip>
  );
}

export default function Socials() {
  return (
    <div className={styles.socials}>
      <SocialButton
        href="https://github.com/rivea0"
        icon={
          <GitHub
            fillColor={`var(--icon-generic-color)`}
            width={20}
            height={20}
            strokeWidth={0}
          />
        }
        tooltip="GitHub"
      />
      <SocialButton
        href="mailto:e.e.ereneda@gmail.com"
        icon={
          <Mail
            color={`var(--icon-generic-color)`}
            width={20}
            height={20}
            strokeWidth={2}
          />
        }
        tooltip="Email"
      />
      <SocialButton
        href="/feed.xml"
        icon={
          <RSS
            color={`var(--icon-generic-color)`}
            strokeWidth={2.25}
            width={20}
            height={20}
          />
        }
        tooltip="RSS"
      />
      <SocialButton
        href="https://mastodon.social/@rivea0"
        icon={
          <Mastodon
            width={18}
            height={20}
            strokeWidth={0}
            fillColor={`var(--icon-generic-color)`}
            color={`var(--icon-generic-color)`}
          />
        }
        tooltip="Mastodon"
        rel="me"
      />
      <SocialButton
        href="https://bsky.app/profile/rivea0.bsky.social"
        icon={
          <Bluesky
            width={18}
            height={20}
            strokeWidth={0}
            fillColor={`var(--icon-generic-color)`}
            color={`var(--icon-generic-color)`}
          />
        }
        tooltip="Bluesky"
      />
    </div>
  );
}
