
'use client'

import { useEffect, useRef } from 'react'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Particle[] = []
    const particleCount = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1

        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = 'rgba(0, 255, 249, 0.8)'
        ctx.strokeStyle = 'rgba(0, 255, 249, 0.8)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      // Cleanup
    }
  }, [])

  return (
    <section id="about" className={styles.about}>
      <canvas ref={canvasRef} className={styles.particleCanvas}></canvas>
      <div className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I&apos;m a passionate web developer with a keen eye for design and a love for creating
          seamless user experiences. With expertise in modern web technologies, I bring ideas
          to life through clean, efficient code and stunning visuals.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}

