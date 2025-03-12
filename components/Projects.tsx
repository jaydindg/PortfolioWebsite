
import styles from './Projects.module.css'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <section id='projects' className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

