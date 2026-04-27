import { skillCategories } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className={styles.skills} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label" data-reveal>Skills</p>
        <h2 className={`section-heading ${styles.heading}`} data-reveal>
          Tools of<br />the trade.
        </h2>

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className={styles.category}
              data-reveal={`delay-${Math.min(i + 1, 5)}`}
            >
              <h3 className={styles.categoryLabel}>{cat.label}</h3>
              <ul className={styles.itemList}>
                {cat.items.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
