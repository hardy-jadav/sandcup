import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { useState, useEffect, useRef } from 'react'

function useCountUp(end, duration = 2000, startOnView = false, isInView = true) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isInView || hasRun.current) return
    hasRun.current = true
    const numericEnd = parseInt(end.replace(/\D/g, ''), 10)
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * numericEnd))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  const suffix = end.replace(/[0-9]/g, '')
  return `${count}${suffix}`
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { value: '15+', label: 'Years of Service' },
    { value: '200K+', label: 'Citizens Served' },
    { value: '50+', label: 'Initiatives Led' },
  ]

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0B1D3A 0%, #1A3A6B 40%, #2A5298 100%)',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-20%', right: '-10%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(200,168,78,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', bottom: '-15%', left: '-10%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 5 + i * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
            style={{
              position: 'absolute',
              top: `${10 + i * 11}%`,
              left: `${8 + i * 12}%`,
              width: `${3 + i * 1.5}px`,
              height: `${3 + i * 1.5}px`,
              background: i % 2 === 0 ? 'var(--color-secondary)' : 'rgba(255,255,255,0.4)',
              borderRadius: '50%',
            }}
          />
        ))}
      </div>

      <div className="container" style={{
        position: 'relative', zIndex: 2, textAlign: 'center',
        padding: 'var(--space-5xl) var(--space-lg) 8rem', width: '100%',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.2rem',
            background: 'rgba(200, 168, 78, 0.15)',
            border: '1px solid rgba(200, 168, 78, 0.3)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--color-secondary-light)',
            fontSize: '0.8rem', fontWeight: '600',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: 'var(--space-xl)',
          }}>
            <span style={{
              width: '6px', height: '6px',
              background: 'var(--color-secondary)',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
            }} />
            Building Tomorrow, Together
          </span>
        </motion.div>

        <h1 style={{ width: '100%', maxWidth: '1000px', margin: '0 auto var(--space-xl)' }}>
          <svg
            className="hero-svg-text"
            viewBox="0 0 1000 240"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-secondary)" />
                <stop offset="100%" stopColor="var(--color-secondary-light)" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="90"
              textAnchor="middle"
              className="svg-text-line svg-text-line-1"
            >
              Visionary Leadership
            </text>
            <text
              x="50%"
              y="200"
              textAnchor="middle"
              className="svg-text-line svg-text-line-2"
            >
              For a Stronger Future
            </text>
            <line
              x1="935" y1="195" x2="935" y2="195"
              className="svg-red-dot"
            />
          </svg>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 3.5, ease: 'easeOut' }}
          style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, var(--color-secondary), var(--color-secondary-light))',
            borderRadius: 'var(--radius-full)',
            margin: '0 auto var(--space-xl)',
            transformOrigin: 'center',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.8 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '620px', margin: '0 auto var(--space-2xl)',
            lineHeight: '1.8',
          }}
        >
          Committed to transparency, community empowerment, and bold policy reform.
          Together, we can create lasting change for every citizen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 4.1 }}
          style={{
            display: 'flex', gap: 'var(--space-md)',
            justifyContent: 'center', flexWrap: 'wrap',
          }}
        >
          <button
            className="btn-primary"
            onClick={() => handleScroll('#cta')}
            style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
          >
            Join the Movement <HiArrowRight />
          </button>
          <button
            className="btn-secondary"
            onClick={() => handleScroll('#about')}
            style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
          >
            <HiPlay /> Learn More
          </button>
        </motion.div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 4.4 }}
          style={{
            display: 'flex', justifyContent: 'center',
            gap: 'var(--space-3xl)', marginTop: 'var(--space-4xl)',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} isVisible={statsVisible} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.0, duration: 0.8 }}
        className="scroll-indicator"
        onClick={() => handleScroll('#about')}
        style={{
          position: 'absolute', bottom: '2.5rem',
          left: '50%', transform: 'translateX(-50%)',
          cursor: 'pointer', zIndex: 10,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{
          fontSize: '0.7rem', fontWeight: '600',
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          Scroll
        </span>
        <div style={{
          width: '24px', height: '40px',
          border: '2px solid rgba(255,255,255,0.25)',
          borderRadius: '12px', position: 'relative',
        }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '4px', height: '8px',
              background: 'var(--color-secondary)',
              borderRadius: 'var(--radius-full)',
              position: 'absolute', top: '6px',
              left: '50%', transform: 'translateX(-50%)',
            }}
          />
        </div>
      </motion.div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
      }} />
    </section>
  )
}

function StatItem({ stat, index, isVisible }) {
  const displayValue = useCountUp(stat.value, 1800, true, isVisible)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ textAlign: 'center' }}
    >
      <div style={{
        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
        fontWeight: '800', color: 'var(--color-secondary)',
        fontFamily: 'var(--font-heading)',
        animation: isVisible ? 'stat-glow 3s ease-in-out infinite' : 'none',
        animationDelay: `${index * 0.3}s`,
      }}>
        {displayValue}
      </div>
      <div style={{
        fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)',
        fontWeight: '500', marginTop: '0.35rem',
        letterSpacing: '0.04em',
      }}>
        {stat.label}
      </div>
    </motion.div>
  )
}
