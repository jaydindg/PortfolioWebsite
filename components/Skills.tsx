
'use client'

import { useState } from 'react'
import styles from './Skills.module.css'

const skills = [
  'JavaScript', 'React', 'Node.js', 'TypeScript',
  'CSS', 'HTML', 'Next.js', 'GraphQL',
  'Python', 'SQL', 'Git', 'AWS'
]

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id='skills' className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.cubeContainer + ' max-w-5xl mx-auto'}>
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`${styles.cube} ${hoveredIndex === index ? styles.hovered : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`${styles.face} ${styles.front}`}>{skill}</div>
            <div className={`${styles.face} ${styles.back}`}>{skill}</div>
            <div className={`${styles.face} ${styles.right}`}>{skill}</div>
            <div className={`${styles.face} ${styles.left}`}>{skill}</div>
            <div className={`${styles.face} ${styles.top}`}>{skill}</div>
            <div className={`${styles.face} ${styles.bottom}`}>{skill}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

