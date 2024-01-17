import Link from 'next/link';
import { ReactNode } from 'react';
import { ExternalLink } from '@components/icons';
import styles from './project.module.css';

type ProjectProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  demoHref?: string;
  codeHref?: string;
  isWriting?: boolean;
  more?: string | ReactNode;
  isThirdParty?: boolean;
  thirdPartyName?: string;
  language?: string[];
  framework?: string[];
};

export default function Project({
  title,
  description,
  demoHref,
  codeHref,
  isWriting,
  more,
  isThirdParty,
  thirdPartyName,
  language,
  framework,
}: ProjectProps) {
  return !isWriting ? (
    <div className={styles.project}>
      <h3>{title}</h3>
      <p>{description}</p>
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
        {language && (
          <div>
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
          </div>
        )}
        {more && (
          <details className={styles.more}>
            <summary>Read more</summary>
            <p>{more}</p>
          </details>
        )}
      </div>
    </div>
  ) : (
    <div className={styles.project}>
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
              <p>{`${isThirdParty ? thirdPartyName : 'Website'}`}</p>
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
    </div>
  );
}
