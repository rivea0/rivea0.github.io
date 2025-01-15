import Link from 'next/link';
import { ReactNode } from 'react';
import { ExternalLink } from '@components/icons';
import styles from './project.module.css';
import Image from 'next/image';

type ProjectProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  demoHref?: string;
  codeHref?: string;
  thirdPartyHref?: string;
  isWriting?: boolean;
  more?: string | ReactNode;
  thirdPartyName?: string;
  demoName?: string;
  language?: string[];
  framework?: string[];
  imageSrc?: string;
};

// See https://github.com/vercel/next.js/blob/canary/examples/image-component/app/shimmer/page.tsx
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Project({
  title,
  description,
  demoHref,
  codeHref,
  thirdPartyHref,
  isWriting,
  more,
  thirdPartyName,
  demoName,
  language,
  framework,
  imageSrc,
}: ProjectProps) {
  return !isWriting ? (
    <div className={styles.project}>
      <h3>{title}</h3>
      {imageSrc &&
        <Image
          src={imageSrc}
          alt={typeof title === 'string' && title}
          width={336}
          height={168}
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        />
      }
      <p>{description}</p>
      <div className="">
          {more && (
            <details className={styles.more}>
              <summary>Read more</summary>
              <p>{more}</p>
            </details>
          )}
        </div>
      <div className={styles.projectLinks}>
        {demoHref && (
          <>
            <Link href={demoHref} className={styles.link}>
              <p>Demo</p>
              <ExternalLink />
            </Link>
          </>
        )}
        {codeHref && (
          <>
            <Link href={codeHref} className={styles.link}>
              <p>Source</p>
              <ExternalLink />
            </Link>
          </>
        )}
        </div>
        <div className={styles.projectLanguages}>
        {language && (
          <ul className={styles.languageList}>
            {language.map((lang) => (
              <li key={lang} className={styles.language}>
                {lang}
              </li>
            ))}
            {framework &&
              framework.map((fw) => (
                <li key={fw} className={styles.framework}>
                  {fw}
                </li>
              ))}
          </ul>
        )}
        </div>
      </div>
  ) : (
    <div className={`${styles.project} ${styles.writingProject} `}>
      <h3>{title}</h3>
      <p>{description}</p>
      {more && (
        <details>
          <summary>Read more</summary>
          <p>{more}</p>
        </details>
      )}
      <div className={styles.projectLinks}>
        {demoHref && (
          <>
            <Link href={demoHref} className={styles.link}>
              <p>{`${demoName}`}</p>
              <ExternalLink />
            </Link>
          </>
        )}
        {codeHref && (
          <>
            <Link href={codeHref} className={styles.link}>
              <p>Source</p>
              <ExternalLink />
            </Link>
          </>
        )}
        {thirdPartyHref && (
          <>
            <Link href={thirdPartyHref} className={styles.link}>
              <p>{`${thirdPartyName}`}</p>
              <ExternalLink />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
