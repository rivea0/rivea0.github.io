import { ProjectLink } from '@components/project-link';
import type { Project } from '@lib/types';
import styles from './project.module.css';

export default function Project(props: Project) {
  const { title, description, demoHref, codeHref, more, language, framework } =
    props;
  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {more && (
          <details className={styles.more}>
            <summary>Read more</summary>
            <p>{more}</p>
          </details>
        )}
      </div>
      <div className={styles.projectLinks}>
        {demoHref && <ProjectLink name="Demo" href={demoHref} />}
        {<ProjectLink name="Source" href={codeHref} />}
      </div>
      <div className={styles.projectLanguages}>
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
    </div>
  );
}
