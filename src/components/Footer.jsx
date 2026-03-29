import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiChevronUp } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const footerLinks = {
  'Quick Links': ['Home', 'About', 'Vision', 'Initiatives', 'News'],
  'Resources': ['Press Kit', 'Reports', 'FAQs', 'Volunteer', 'Donate'],
  'Legal': ['Privacy Policy', 'Terms of Service', 'Accessibility', 'Disclaimer'],
}

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer id="footer" ref={ref} style={{
        background: 'var(--color-primary)',
        color: 'rgba(255,255,255,0.7)',
        paddingTop: 'var(--space-4xl)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '80px', height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--color-secondary), transparent)',
        }} />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'var(--space-2xl)' }}
            className="footer-grid"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-lg)' }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                }}>L</div>
                <span style={{
                  fontSize: '1.25rem', fontWeight: '700', color: '#fff',
                  fontFamily: 'var(--font-heading)',
                }}>
                  Leader<span style={{ color: 'var(--color-secondary)' }}>ship</span>
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.85', marginBottom: 'var(--space-xl)', maxWidth: '300px' }}>
                Committed to building a stronger, more united future through visionary leadership and community-first governance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', fontSize: '0.85rem' }}>
                <a href="mailto:contact@leadership.org" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-secondary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  <HiMail style={{ color: 'var(--color-secondary)', fontSize: '1rem' }} /> contact@leadership.org
                </a>
                <a href="tel:+1234567890" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-secondary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  <HiPhone style={{ color: 'var(--color-secondary)', fontSize: '1rem' }} /> +1 (234) 567-890
                </a>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HiLocationMarker style={{ color: 'var(--color-secondary)', fontSize: '1rem' }} /> 123 Civic Center, Capital City
                </span>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links], colIdx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + colIdx * 0.1 }}
              >
                <h4 style={{
                  color: '#fff', fontSize: '0.95rem', fontWeight: '700',
                  marginBottom: 'var(--space-lg)', fontFamily: 'var(--font-heading)',
                  position: 'relative', paddingBottom: '0.5rem',
                }}>
                  {title}
                  <span style={{
                    position: 'absolute', bottom: 0, left: 0,
                    width: '24px', height: '2px',
                    background: 'var(--color-secondary)', borderRadius: 'var(--radius-full)',
                  }} />
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" style={{
                        fontSize: '0.85rem', transition: 'all var(--transition-fast)',
                        display: 'inline-block',
                      }}
                        onMouseEnter={e => { e.target.style.color = 'var(--color-secondary)'; e.target.style.transform = 'translateX(4px)' }}
                        onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)'; e.target.style.transform = 'translateX(0)' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              marginTop: 'var(--space-3xl)',
              padding: 'var(--space-xl) 0',
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)',
            }}
          >
            <p style={{ fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Leadership. All rights reserved.</p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  <a key={i} href={s.href} aria-label={s.label} style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)',
                    transition: 'all var(--transition-base)',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-secondary)'
                      e.currentTarget.style.color = 'var(--color-primary)'
                      e.currentTarget.style.borderColor = 'var(--color-secondary)'
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 480px) {
            .footer-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </footer>

      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <HiChevronUp />
        </motion.button>
      )}
    </>
  )
}
