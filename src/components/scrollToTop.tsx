/* Import ---------------------------------------------------------------------- */ // - x70

import {
    useEffect,
    useState
} from 'react'

import Link from 'next/link'

import styles from '../styles/components/scrollToTop.module.scss'

/* ---------------------------------------------------------------------- */

export const ScrollToTop = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)

        handleScroll()

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return scrollY < 200 ?
        <></>
        :
        <Link href='/' passHref scroll><button className={styles.container} title='Scroll To Top' aria-label='Scroll To Top'><i className='bx bx-up-arrow-alt bx-sm' /></button></Link>
}