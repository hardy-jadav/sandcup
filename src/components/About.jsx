import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'

const highlights = [
  'Championed education reform across 12 districts',
  'Led community development projects impacting 200K+ citizens',
  'Advocate for transparent governance and accountability',
  'Established grassroots programs for youth empowerment',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      className="section-padding accent-line-top"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="container" ref={ref}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-4xl)',
          alignItems: 'center',
        }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              aspectRatio: '4/5',
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  radial-gradient(circle at 30% 40%, rgba(200,168,78,0.15) 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, rgba(59,130,246,0.1) 0%, transparent 50%)
                `,
              }} />

              <div style={{
                position: 'absolute', inset: 0, opacity: 0.04,
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 11px)',
              }} />

              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: 'var(--space-xl)',
              }}>
                <div style={{ position: 'relative', marginBottom: 'var(--space-lg)' }}>
                  <motion.div
                    animate={isInView ? { scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute', inset: '-12px',
                      borderRadius: '50%',
                      border: '2px solid rgba(200,168,78,0.3)',
                    }}
                  />
                  <div style={{
                    width: '120px', height: '120px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem', fontFamily: 'var(--font-heading)',
                    fontWeight: '800', color: 'var(--color-primary)',
                    boxShadow: 'var(--shadow-glow)',
                  }}>
                    JD
                  </div>
                </div>

                <div style={{
                  color: '#fff', textAlign: 'center',
                  fontSize: '1.15rem', fontWeight: '700',
                  fontFamily: 'var(--font-heading)',
                }}>
                  John Doe
                </div>
                <div style={{
                  color: 'var(--color-secondary-light)',
                  fontSize: '0.85rem', fontWeight: '500',
                  marginTop: '0.25rem', letterSpacing: '0.03em',
                }}>
                  Community Leader & Visionary
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                background: '#fff', borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-lg)', boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
                animation: 'float-gentle 4s ease-in-out infinite',
              }}
            >
              <div style={{
                fontSize: '1.75rem', fontWeight: '800',
                color: 'var(--color-primary)', fontFamily: 'var(--font-heading)',
              }}>15+</div>
              <div style={{
                fontSize: '0.75rem', color: 'var(--color-text-secondary)',
                fontWeight: '600',
              }}>Years of<br/>Leadership</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{
                position: 'absolute', top: '-16px', left: '-16px',
                width: '50px', height: '50px',
                borderTop: '3px solid var(--color-secondary)',
                borderLeft: '3px solid var(--color-secondary)',
                borderRadius: '8px 0 0 0',
                opacity: 0.5,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.span
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >About</motion.span>

            <h2 className="section-title" style={{ textAlign: 'left' }}>
              A Leader Committed to<br />
              <span style={{ color: 'var(--color-secondary)' }}>Meaningful Change</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                width: '50px', height: '3px',
                background: 'linear-gradient(90deg, var(--color-secondary), var(--color-secondary-light))',
                borderRadius: 'var(--radius-full)',
                marginBottom: 'var(--space-xl)',
                transformOrigin: 'left',
              }}
            />

            <p style={{
              fontSize: '1.02rem', color: 'var(--color-text-secondary)',
              lineHeight: '1.85', marginBottom: 'var(--space-xl)',
            }}>
              With over 15 years of dedicated public service, John Doe has been at the
              forefront of community development, policy reform, and grassroots empowerment.
              His unwavering commitment to transparency and equity has made him a trusted
              voice for citizens across the region.
            </p>

            <ul style={{
              listStyle: 'none', display: 'flex',
              flexDirection: 'column', gap: 'var(--space-md)',
              marginBottom: 'var(--space-2xl)',
            }}>
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start',
                    gap: '0.75rem', fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    padding: '0.5rem 0',
                    borderBottom: i < highlights.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.12, type: 'spring', stiffness: 300 }}
                  >
                    <HiCheckCircle style={{
                      color: 'var(--color-secondary)', fontSize: '1.3rem',
                      flexShrink: 0, marginTop: '1px',
                    }} />
                  </motion.div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <button
                className="btn-primary"
                onClick={() => document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover the Vision <HiArrowRight />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  )
}
