import { personal } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Introduction">
      <div className={`container ${styles.inner}`}>

        <div className={styles.top}>
          <span className={styles.available}>
            <span className={styles.dot} aria-hidden="true" />
            Available for opportunities
          </span>
        </div>

        <div className={styles.nameBlock}>
          <h1 className={styles.name} aria-label={personal.name}>
            <span className={styles.nameLine}>{personal.name.split(' ')[0]}</span>
            <span className={styles.nameLine}>{personal.name.split(' ')[1]}</span>
          </h1>
        </div>

        <div className={styles.bottom}>
          <p className={styles.role}>{personal.role}</p>
          <p className={styles.bio}>{personal.heroBio}</p>

          <div className={styles.links}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
            >
              GitHub
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Résumé
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn"
            >
              Email
            </a>
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>scroll</span>
        </div>
      </div>
    </section>
  )
}
