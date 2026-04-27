import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className={styles.projects} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label" data-reveal>
          Projects
          <span className={styles.count}>{projects.length}</span>
        </p>
        <h2 className="section-heading" data-reveal>
          What I've<br />been building.
        </h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
