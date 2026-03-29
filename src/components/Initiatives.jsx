import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import {
  HiOutlineEye, HiOutlineHeart, HiOutlineBriefcase,
  HiOutlineHome, HiOutlineLightningBolt, HiOutlineLibrary,
} from 'react-icons/hi'

const initiatives = [
  { icon: HiOutlineLibrary, title: 'Education Access Program', description: 'Building schools and providing scholarships to underserved communities, benefiting over 50,000 students annually.', tag: 'Education', color: '#3B82F6' },
  { icon: HiOutlineHeart, title: 'Community Health Initiative', description: 'Establishing mobile health clinics and wellness programs reaching 100+ rural communities.', tag: 'Healthcare', color: '#EF4444' },
  { icon: HiOutlineBriefcase, title: 'Jobs & Skills Program', description: 'Vocational training and entrepreneurship development creating 10,000+ new employment opportunities.', tag: 'Employment', color: '#10B981' },
  { icon: HiOutlineHome, title: 'Affordable Housing', description: 'Partnering with developers to deliver 5,000+ affordable housing units for low-income families.', tag: 'Housing', color: '#F59E0B' },
  { icon: HiOutlineLightningBolt, title: 'Clean Energy Transition', description: 'Investing in solar and wind infrastructure to reduce carbon emissions by 40% within the next decade.', tag: 'Environment', color: '#8B5CF6' },
  { icon: HiOutlineEye, title: 'Digital Governance', description: 'Implementing transparent e-governance platforms for citizen-centric public service delivery.', tag: 'Technology', color: '#06B6D4' },
]

export default function Initiatives() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="initiatives"
      className="section-padding"
      style={{ background: 'var(--color-bg)', position: 'relative' }}
    >
      <div className="container" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="section-label">Key Initiatives</span>
          </motion.div>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} style={{ textAlign: 'center' }}>
            Programs That <span style={{ color: 'var(--color-secondary)' }}>Make an Impact</span>
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="section-divider" style={{ transformOrigin: 'center' }} />
          <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            Practical, results-driven initiatives transforming communities and improving lives.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-xl)' }} className="initiatives-grid">
          {initiatives.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  padding: 'var(--space-2xl)', position: 'relative',
                  overflow: 'hidden', cursor: 'default',
                }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '4px', background: item.color,
                    transformOrigin: 'left',
                  }}
                />

                <span style={{
                  display: 'inline-block', fontSize: '0.7rem', fontWeight: '700',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: item.color, background: `${item.color}15`,
                  padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {item.tag}
                </span>

                <div className="icon-box" style={{
                  width: '52px', height: '52px',
                  background: `${item.color}12`, borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <Icon style={{ fontSize: '1.5rem', color: item.color }} />
                </div>

                <h3 style={{
                  fontSize: '1.1rem', fontWeight: '700',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-sm)',
                  fontFamily: 'var(--font-heading)',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.88rem', color: 'var(--color-text-secondary)',
                  lineHeight: '1.75', marginBottom: 'var(--space-lg)',
                }}>
                  {item.description}
                </p>

                <button className="read-more-btn">
                  Learn More <HiArrowRight />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .initiatives-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .initiatives-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
