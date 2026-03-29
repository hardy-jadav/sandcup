import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { HiArrowRight, HiCalendar } from 'react-icons/hi'

const newsItems = [
  { date: 'March 15, 2026', category: 'Community', title: 'New Community Center Inaugurated in District 7', excerpt: 'A state-of-the-art community center designed to serve over 15,000 residents with recreational, educational, and wellness.', color: '#3B82F6' },
  { date: 'March 10, 2026', category: 'Policy', title: 'Education Reform Bill Passes Committee Review', excerpt: 'The comprehensive education reform bill moves to the next stage after receiving unanimous support from the committee.', color: '#10B981' },
  { date: 'March 5, 2026', category: 'Event', title: 'Town Hall Meeting: Vision 2030 Roadmap', excerpt: 'Join us for an interactive town hall session to discuss the strategic roadmap and gather citizen feedback.', color: '#F59E0B' },
  { date: 'February 28, 2026', category: 'Infrastructure', title: 'Clean Water Project Reaches 100 Villages', excerpt: 'The clean water initiative has successfully provided access to safe drinking water in 100 rural villages.', color: '#8B5CF6' },
  { date: 'February 20, 2026', category: 'Economy', title: 'Small Business Grant Program Expanded', excerpt: 'The grant program for small businesses and startups has been expanded with additional $5M in funding.', color: '#EF4444' },
]

export default function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="news"
      className="section-padding accent-line-top"
      style={{ background: 'linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%)' }}
    >
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="section-label">Latest News</span>
          </motion.div>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} style={{ textAlign: 'center' }}>
            Stay <span style={{ color: 'var(--color-secondary)' }}>Informed</span>
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="section-divider" style={{ transformOrigin: 'center' }} />
          <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            The latest updates, events, and announcements from our leadership initiatives.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: '3.5rem' }}
          >
            {newsItems.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="glass-card"
                  style={{
                    padding: 'var(--space-xl)', height: '100%',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  <div style={{
                    width: '100%', height: '140px',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: 'var(--space-lg)',
                    background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)`,
                    position: 'relative', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(90deg, transparent, ${item.color}10, transparent)`,
                      animation: 'shimmer-line 3s ease-in-out infinite',
                    }} />
                    <HiCalendar style={{ fontSize: '2rem', color: `${item.color}40` }} />
                  </div>

                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: 'var(--space-md)',
                  }}>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: '700',
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                      color: item.color, background: `${item.color}12`,
                      padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)',
                    }}>
                      {item.category}
                    </span>
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: '0.35rem',
                      fontSize: '0.72rem', color: 'var(--color-text-muted)',
                    }}>
                      <HiCalendar style={{ fontSize: '0.75rem' }} /> {item.date}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.02rem', fontWeight: '700',
                    color: 'var(--color-primary)', fontFamily: 'var(--font-heading)',
                    marginBottom: 'var(--space-sm)', lineHeight: '1.4',
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '0.84rem', color: 'var(--color-text-secondary)',
                    lineHeight: '1.75', flex: 1,
                  }}>
                    {item.excerpt}
                  </p>

                  <button className="read-more-btn" style={{ marginTop: 'var(--space-lg)' }}>
                    Read More <HiArrowRight />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
