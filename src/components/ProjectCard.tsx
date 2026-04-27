import type { Project } from '../data/portfolio'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const delay = Math.min(index % 3 + 1, 5) as 1 | 2 | 3 | 4 | 5

  return (
    <article
      className={styles.card}
      data-reveal={`delay-${delay}`}
      aria-label={project.title}
    >
      {/* Image — replace div with <img> when you have actual images */}
      <div className={styles.imageWrap}>
        {<img src={project.imageSrc} alt={project.imageAlt} /> }
        
      </div>

      <div className={styles.content}>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.actions}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label={`View ${project.title} source on GitHub`}
            >
              GitHub
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
              aria-label={`View live demo of ${project.title}`}
            >
              Live demo
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
