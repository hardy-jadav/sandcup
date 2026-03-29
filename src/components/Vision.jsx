import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiLightBulb, HiShieldCheck, HiUserGroup,
  HiGlobe, HiAcademicCap, HiHeart,
} from 'react-icons/hi'

const visionPoints = [
  { icon: HiLightBulb, title: 'Innovation & Progress', description: 'Harnessing technology and creativity to modernize public services and drive economic growth.' },
  { icon: HiShieldCheck, title: 'Transparent Governance', description: 'Building trust through open decision-making, accountability, and anti-corruption reforms.' },
  { icon: HiUserGroup, title: 'Community First', description: 'Empowering local communities with resources, infrastructure, and grassroots development programs.' },
  { icon: HiGlobe, title: 'Sustainable Future', description: 'Committing to environmental stewardship and green initiatives for future generations.' },
  { icon: HiAcademicCap, title: 'Quality Education', description: 'Ensuring access to world-class education and skill development for every citizen.' },
  { icon: HiHeart, title: 'Healthcare for All', description: 'Making quality healthcare accessible and affordable through systemic reform and investment.' },
]

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="vision"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(200,168,78,0.08) 0%, transparent 70%)',
        borderRadius: '0 0 0 100%',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: 0,
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        borderRadius: '0 100% 0 0',
      }} />

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Vision</span>
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ textAlign: 'center' }}
          >
            A Roadmap for <span style={{ color: 'var(--color-secondary)' }}>Lasting Change</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-divider"
            style={{ transformOrigin: 'center' }}
          />

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Six pillars defining our commitment to building a prosperous,
            equitable, and sustainable tomorrow.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-xl)',
        }} className="vision-grid">
          {visionPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  padding: 'var(--space-2xl)',
                  textAlign: 'center',
                  cursor: 'default',
                  position: 'relative',
                }}
              >
                <span className="card-number">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="icon-box" style={{
                  width: '64px', height: '64px',
                  background: 'linear-gradient(135deg, rgba(200,168,78,0.15) 0%, rgba(200,168,78,0.05) 100%)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto var(--space-lg)',
                }}>
                  <Icon style={{ fontSize: '1.75rem', color: 'var(--color-secondary)' }} />
                </div>

                <h3 style={{
                  fontSize: '1.15rem', fontWeight: '700',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-sm)',
                  fontFamily: 'var(--font-heading)',
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '0.88rem', color: 'var(--color-text-secondary)',
                  lineHeight: '1.75',
                }}>
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .vision-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .vision-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
