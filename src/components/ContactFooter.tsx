import { personal } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './ContactFooter.module.css'

export default function ContactFooter() {
  const ref = useReveal()

  return (
    <footer id="contact" className={styles.footer} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        {/* Main CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaLabel} data-reveal>-----</p>
          <a
            href={`mailto:${personal.email}`}
            className={styles.ctaHeading}
            data-reveal="delay-1"
            aria-label="Send Jayanth an email"
          >
            Reach out.
          </a>
          <p className={styles.ctaSub} data-reveal="delay-2">
            Open to internships, research collaborations, and interesting side projects.
          </p>
        </div>

        {/* Links row */}
        <div className={styles.linksRow} data-reveal="delay-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Jayanth's GitHub profile"
          >
            GitHub
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Jayanth's LinkedIn profile"
          >
            LinkedIn
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className={styles.socialLink}
          >
            {personal.email}
          </a>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom} data-reveal="delay-4">
          <span className={styles.copy}>
            © {new Date().getFullYear()} Jayanth Lalukota
          </span>
          <a href="#home" className={styles.toTop} aria-label="Back to top">
            Back to top
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
