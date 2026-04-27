import { personal } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className={styles.about} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label" data-reveal>About</p>

        <div className={styles.grid}>
          {/* Text column */}
          <div className={styles.textCol}>
            <h2 className={`section-heading ${styles.heading}`} data-reveal>
              Building things<br />that matter.
            </h2>

            <div className={styles.body}>
              {personal.aboutBio.split('\n\n').map((para, i) => (
                <p key={i} data-reveal={`delay-${i + 1}`}>{para}</p>
              ))}

              <div className={styles.focusList} data-reveal="delay-3">
                <h3 className={styles.focusLabel}>Focus areas</h3>
                <ul>
                  {[
                    'Systems programming & infrastructure',
                    'ML systems & reinforcement learning',
                    'Robotics & sim-to-real transfer',
                    'Developer tooling & open source',
                  ].map((item) => (
                    <li key={item}>
                      <span className={styles.bullet} aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className={styles.imageCol} data-reveal="delay-2">
            {/* Replace this placeholder with an <img> tag when you have a photo */}
            { <img src={personal.profileImageSrc} alt={personal.profileImageAlt} /> }
            
          </div>
        </div>
      </div>
    </section>
  )
}
