
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>&copy; 2023 Your Name. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Twitter
          </a>
        </div>
      </div>
      <div className={styles.wave}></div>
    </footer>
  )
}

