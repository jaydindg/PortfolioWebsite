
'use client'

import { useState } from 'react'
import styles from '@/components/Projects.module.css'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectCard} ${activeProject === index ? styles.active : ''}`}
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className={styles.projectImage} style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className={styles.projectInfo}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.projectOverlay}>
              <span className={styles.viewDetails}>View Details</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

