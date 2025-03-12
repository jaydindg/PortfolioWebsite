
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/" className='z-[500] border-b p-2 border-white/20' style={{ textTransform: 'lowercase' }}>jaydin.dev</Link>
      </div>
      <ul className={styles.navLinks}>
        {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item} className={styles.navItem}>
            <Link
              href={`#${item.toLowerCase()}`}
              className={`${styles.navLink} ${activeLink === item ? styles.active : ''}`}
              onClick={() => setActiveLink(item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

