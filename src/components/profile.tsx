/* Import ---------------------------------------------------------------------- */ // - x70

import { DownloadPdf } from '../components/downloadPdf'
import { ThemeChanger } from '../components/themeChanger'

import styles from '../styles/components/profile.module.scss'

/* ---------------------------------------------------------------------- */

export const Profile = () => {
  return (
    <header className={styles.container}>
      <div className={styles.innerHeader}>
        <DownloadPdf />
        <ThemeChanger />
      </div>

      <div className={styles.profileImage}>
        {/* <Image
          src={profileImage}
          alt="xiaoyureed profile"
          layout="responsive"
          placeholder="blur"
          decoding="async"
          priority
        /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='https://avatars.githubusercontent.com/u/19821471?v=4'
          alt="xiaoyureed profile"
        />
      </div>

      <h1 className={styles.name}>肖雨 | xiaoyu</h1>
      <p className={styles.description}>
        <code className={styles.code}>后台开发工程师 | Backend Developer</code>
      </p>

      <DownloadPdf />

      <div className={styles.datas}>
        <p>
          <i className="bx bx-map bx-xs" />
          中国湖北省宜昌市 | Yi Chang, Hu Bei province, China
        </p>
        <p>
          <i className="bx bx-envelope bx-xs" />
          xiaoyureed@gmail.com
        </p>
        <p>
          <i className="bx bx-phone bx-xs" />
          (+86) 175-2109-0691
        </p>
      </div>
    </header>
  )
}
