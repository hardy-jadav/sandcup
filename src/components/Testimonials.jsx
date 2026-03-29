import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  { name: 'Sarah Mitchell', role: 'School Principal', quote: 'The education reform initiatives have completely transformed our school district.Students have access to resources.', rating: 5 },
  { name: 'Dr. Raj Patel', role: 'Community Health Director', quote: 'The mobile health clinics program is saving lives in rural communities every single day. This is leadership that truly cares.', rating: 5 },
  { name: 'Maria Gonzalez', role: 'Small Business Owner', quote: 'Thanks to the entrepreneurship grants, I was able to expand my bakery and hire 8 more employees. This program changed my life.', rating: 5 },
  { name: 'James Thompson', role: 'Environmental Activist', quote: 'The clean energy transition plan is ambitious yet practical. Finally, a leader who takes climate action seriously.', rating: 5 },
  { name: 'Linda Chen', role: 'Youth Program Coordinator', quote: 'The youth empowerment programs have given thousands of young people a sense of purpose and direction.', rating: 4 },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="section-padding" style={{
      background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(200,168,78,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute', top: '10%', right: '5%',
          fontSize: '20rem', color: '#fff',
          fontFamily: 'Georgia, serif', lineHeight: 1,
          pointerEvents: 'none', userSelect: 'none',
        }}
      >
        &ldquo;
      </motion.div>

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="section-label" style={{ background: 'rgba(200,168,78,0.2)', color: 'var(--color-secondary-light)' }}>Testimonials</span>
          </motion.div>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} style={{ color: '#fff', textAlign: 'center' }}>
            What People <span style={{ color: 'var(--color-secondary)' }}>Are Saying</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: '60px', height: '3px',
              background: 'linear-gradient(90deg, var(--color-secondary), var(--color-secondary-light))',
              borderRadius: 'var(--radius-full)',
              margin: '0 auto var(--space-xl)',
              transformOrigin: 'center',
            }}
          />
          <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} style={{ color: 'rgba(255,255,255,0.55)' }}>
            Real stories from real people whose lives have been positively impacted.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24} slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            style={{ paddingBottom: '3.5rem' }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-2xl)', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  transition: 'all var(--transition-base)',
                  position: 'relative',
                }}>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <FaQuoteLeft style={{ fontSize: '1.25rem', color: 'rgba(200,168,78,0.4)' }} />
                  </div>

                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: 'var(--space-lg)' }}>
                    {[...Array(5)].map((_, si) => (
                      <HiStar key={si} style={{
                        fontSize: '0.95rem',
                        color: si < t.rating ? 'var(--color-secondary)' : 'rgba(255,255,255,0.15)',
                      }} />
                    ))}
                  </div>

                  <p style={{
                    fontSize: '0.92rem', color: 'rgba(255,255,255,0.78)',
                    lineHeight: '1.85', fontStyle: 'italic',
                    flex: 1, marginBottom: 'var(--space-xl)',
                  }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-md)',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: 'var(--space-lg)',
                  }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.85rem', fontWeight: '700',
                      color: 'var(--color-primary)', fontFamily: 'var(--font-heading)',
                      flexShrink: 0,
                      boxShadow: '0 0 15px rgba(200,168,78,0.2)',
                    }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#fff' }}>{t.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
