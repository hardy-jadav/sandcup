import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight, HiSparkles } from 'react-icons/hi'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta" className="section-padding" style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(200,168,78,0.06) 0%, transparent 70%)' }} />

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 60%, var(--color-primary-lighter) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 4vw, 4rem)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', border: '2px solid rgba(200,168,78,0.15)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', border: '2px solid rgba(255,255,255,0.05)', borderRadius: '50%' }} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: '15%', right: '10%', width: '100px', height: '100px', border: '1px dashed rgba(200,168,78,0.12)', borderRadius: '50%' }}
          />

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i, repeat: Infinity,
                ease: 'easeInOut', delay: i * 0.7,
              }}
              style={{
                position: 'absolute',
                top: `${20 + i * 15}%`,
                left: `${15 + i * 16}%`,
                color: 'rgba(200,168,78,0.2)',
                fontSize: `${0.6 + i * 0.15}rem`,
              }}
            >
              <HiSparkles />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: 'var(--space-lg)' }}
          >
            <HiSparkles style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', opacity: 0.6 }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff',
              fontFamily: 'var(--font-heading)',
              maxWidth: '700px', margin: '0 auto var(--space-md)',
            }}
          >
            Ready to Build a<br />
            <span style={{ color: 'var(--color-secondary)' }}>Brighter Tomorrow?</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              width: '50px', height: '3px',
              background: 'linear-gradient(90deg, var(--color-secondary), var(--color-secondary-light))',
              borderRadius: 'var(--radius-full)',
              margin: '0 auto var(--space-lg)',
              transformOrigin: 'center',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)',
              maxWidth: '550px', margin: '0 auto var(--space-2xl)',
              lineHeight: '1.8',
            }}
          >
            Join thousands of citizens committed to positive change. Your voice matters, and together we can create lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <div style={{ position: 'relative' }}>
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', inset: '-6px',
                  borderRadius: 'var(--radius-full)',
                  border: '2px solid rgba(200,168,78,0.3)',
                }}
              />
              <button className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Get Involved Now <HiArrowRight />
              </button>
            </div>
            <button className="btn-secondary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
