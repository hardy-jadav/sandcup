import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'News', href: '#news' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(`#${sections[i]}`)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.header
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.6rem 0' : '1rem 0',
        background: scrolled
          ? 'rgba(11, 29, 58, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            fontWeight: '800',
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-heading)',
          }}>
            L
          </div>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#fff',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
          }}>
            Leader<span style={{ color: 'var(--color-secondary)' }}>ship</span>
          </span>
        </a>

        <ul style={{
          display: 'flex',
          gap: '0.25rem',
          listStyle: 'none',
          alignItems: 'center',
        }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: activeSection === link.href ? '600' : '400',
                  color: activeSection === link.href ? 'var(--color-secondary)' : 'rgba(255,255,255,0.8)',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all var(--transition-base)',
                  position: 'relative',
                }}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '3px',
                      background: 'var(--color-secondary)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              onClick={(e) => handleClick(e, '#cta')}
              className="btn-primary"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              Get Involved
            </a>
          </li>
        </ul>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            color: '#fff',
            fontSize: '1.75rem',
          }}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(11, 29, 58, 0.98)',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden',
            }}
          >
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 'var(--space-lg)',
              gap: 'var(--space-xs)',
              listStyle: 'none',
            }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      color: activeSection === link.href ? 'var(--color-secondary)' : '#fff',
                      fontWeight: activeSection === link.href ? '600' : '400',
                      borderRadius: 'var(--radius-md)',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: 'var(--space-sm)' }}>
                <a
                  href="#cta"
                  onClick={(e) => handleClick(e, '#cta')}
                  className="btn-primary"
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
