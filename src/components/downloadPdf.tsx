/* Import ---------------------------------------------------------------------- */ // - x70

import styles from '../styles/components/downloadPdf.module.scss'

/* ---------------------------------------------------------------------- */

export const DownloadPdf = () => (
  <button
    type="button"
    className={styles.downloadPdf}
    title="Download PDF"
    aria-label="Download PDF"
  >
    <i className="bx bx-download bx-sm" />
  </button>
)
