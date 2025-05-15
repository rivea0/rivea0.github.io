import Link from '@components/link';
import { Suspense } from 'react'
import { getProjects } from '@lib/get-projects'
import Project from '@components/project'
import LoaderIcon from '@components/loader-icon'
import styles from './projects.module.css'

export const metadata = {
  title: 'Projects',
  alternates: {
    canonical: 'https://rivea0.github.io/projects',
  },
}

export default function Page() {
  return (
    <Suspense fallback={<LoaderIcon />}>
      <ul className={styles.projects}>
        {getProjects().map(project => {
          return (
            <li key={project.title}>
            <Project 
              title={project.title} 
              description={project.description} 
              demoHref={project.demoHref} 
              codeHref={project.codeHref} 
              isWriting={false}
              language={project.language}
              framework={project.framework}
              more={project.more}
            />
            </li>
          )
        })}
      </ul>
      <h2 className={styles.heading}>Writing</h2>
      <ul className={styles.projects}>
      <Project
        title={<><em>Bite-Sized Mathematics for Computer Science</em></>}
        description={<>A collection of my <i>very</i> short notes on <Link href="https://openlearninglibrary.mit.edu/courses/course-v1:OCW+6.042J+2T2019/about" external>MIT's 6.042 Mathematics for Computer Science</Link>. Half learn-in-public experiment, half short online book.
        Website written in <Link href="https://www.11ty.dev/" external>Eleventy</Link>.</>}
        demoHref="https://rivea0.github.io/bite-sized-math-for-cs"
        codeHref="https://github.com/rivea0/bite-sized-math-for-cs"
        isWriting={true}
        demoName='Website'
      />
      <Project 
        title={<><em>Solving the Problem Sets of CS50's Introduction to Programming with Python — One at a Time</em> Series</>} 
        description={<>A ten-part series of blog posts that were published each week as the new problem sets arrived in <Link href="https://cs50.harvard.edu/python/2022" external>CS50's Introduction to Programming with Python</Link> to guide learners taking the course.</>}
        thirdPartyHref="https://dev.to/rivea0/solving-the-problem-sets-of-cs50s-introduction-to-programming-with-python-one-at-a-time-problem-set-0-27d5"
        isWriting={true}
        more={<>I took the original CS50 the year before, and had been diving a bit deep into Python, so when this course was first introduced, I took the challenge to take it, do the problem sets, and write about it each week on the day they arrived. It indeed proved to <Link href="https://web.archive.org/web/20231114183738/https://dev.to/rivea0/solving-the-problem-sets-of-cs50s-introduction-to-programming-with-python-one-at-a-time-problem-set-5-k44#comment-1od25" external>be</Link> <Link href="https://web.archive.org/web/20231114184027/https://dev.to/rivea0/solving-the-problem-sets-of-cs50s-introduction-to-programming-with-python-one-at-a-time-problem-set-8-5lf#comment-20o22" external>helpful</Link> for some folks.</>}
        thirdPartyName='dev.to'
      />
      <Project
        title={<><em>LeetCode Meditations</em></>}
        description={<>A series of 79 blog posts spanning the year of 2024, tackling LeetCode problems (including introductory chapters with hand-made GIFs).</>}
        demoHref="https://rivea0.github.io/leetcode-meditations"
        demoName='Series'
        isWriting={true}
        thirdPartyName='dev.to'
        thirdPartyHref='https://dev.to/rivea0/series/26418'
      />
      </ul>
    </Suspense>
  )
}
