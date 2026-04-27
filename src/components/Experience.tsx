import { experience } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className={styles.experience} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label" data-reveal>Experience</p>
        <h2 className="section-heading" data-reveal>
          Where I've<br />worked.
        </h2>

        <div className={styles.list}>
          {experience.map((item, i) => (
            <div
              key={item.id}
              className={styles.item}
              data-reveal={`delay-${Math.min(i + 1, 5)}`}
            >
              <div className={styles.meta}>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.location}>{item.location}</span>
              </div>

              <div className={styles.body}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.org}>{item.org}</span>
                </div>

                <ul className={styles.bullets}>
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
