/* Import ---------------------------------------------------------------------- */ // - x70

import { Profile } from '../components/profile'
import { Social } from '../components/social'
import { Summary } from '../components/summary'
import { Education } from '../components/education'
import { Skills } from '../components/skills'
import { WorkExperience } from '../components/work-experience'
import { ProjectExperience } from '../components/project-experience'
import { Languages } from '../components/languages'
import { Interests } from '../components/interests'
import { ScrollToTop } from '../components/scrollToTop'

import Head from 'next/head'

import styles from '../styles/pages/home.module.scss'

/* ---------------------------------------------------------------------- */

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CV - 肖雨</title>
      </Head>

      <aside>
        <Profile />
        <Social />
        <Summary />
        <Education />
        <Skills />
      </aside>

      <main className={styles.main}>
        <WorkExperience />
        <ProjectExperience />
        <Languages />
        <Interests />
      </main>

      <ScrollToTop />
    </div>
  )
}
