
'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './FeaturedProjects.module.css'
import { projects } from '@/lib/projects'

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.projectGrid}>
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className={`${styles.projectCard} ${activeProject === index ? styles.active : ''}`}
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className={styles.projectImage} style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
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
      <Link href="/projects" className={styles.viewAllButton}>
        View All Projects
      </Link>
    </section>
  )
}

