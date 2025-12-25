import { Suspense } from 'react';
import { getProjects } from '@lib/get-projects';
import Project from '@components/project';
import LoaderIcon from '@components/loader-icon';
import styles from './projects.module.css';
import { writingProjects } from '@lib/constants';
import { ProjectLink } from '@components/project-link';

export const metadata = {
  title: 'Projects',
  alternates: {
    canonical: 'https://rivea0.github.io/projects',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<LoaderIcon />}>
      <ul className={styles.projects}>
        {getProjects().map((project) => {
          return (
            <li key={project.title}>
              <Project
                title={project.title}
                description={project.description}
                demoHref={project.demoHref}
                codeHref={project.codeHref}
                language={project.language}
                framework={project.framework}
                more={project.more}
              />
            </li>
          );
        })}
      </ul>
      <h2 className={styles.heading}>Writing</h2>
      <ul className={styles.writingProjectList}>
        {writingProjects.map((project) => {
          return (
            <li key={project.title}>
              <p>{project.title}</p>
              <p>{project.description}</p>
              <div className={styles.links}>
                {project.links.map((linkItem) => {
                  return (
                    <div key={linkItem.name}>
                      <ProjectLink name={linkItem.name} href={linkItem.href} />
                    </div>
                  );
                })}
              </div>
              {project.more && (
                <details className={styles.more}>
                  <summary>Read more</summary>
                  <p>{project.more}</p>
                </details>
              )}
            </li>
          );
        })}
      </ul>
    </Suspense>
  );
}
