''''use client'
import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"

export default function AboutPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Particle constellation effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      pulse: number
      pulseSpeed: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20))
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const mouse = { x: -1000, y: -1000 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150
          p.vx += (dx / dist) * force * 0.5
          p.vy += (dy / dist) * force * 0.5
        }

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99

        // Draw particle with pulse
        const pulseRadius = p.radius + Math.sin(p.pulse) * 1
        const pulseOpacity = p.opacity + Math.sin(p.pulse) * 0.2

        ctx.beginPath()
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(196, 163, 90, ${pulseOpacity})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx2 = p.x - p2.x
          const dy2 = p.y - p2.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (dist2 < 180) {
            const opacity = (1 - dist2 / 180) * 0.15
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(196, 163, 90, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div style={{ backgroundColor: '#0a0a0f', color: '#f0f0f5', fontFamily: "'Inter', sans-serif", lineHeight: 1.7, overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero — Exclusive & Eye-Catching */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated particle canvas background */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />

        {/* Radial glow behind text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(196, 163, 90, 0.12) 0%, rgba(196, 163, 90, 0.03) 40%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 2,
            animation: 'breathe 6s ease-in-out infinite',
          }}
        />

        {/* Decorative rings */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '500px',
            height: '500px',
            border: '1px solid rgba(196, 163, 90, 0.08)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 2,
            animation: 'spin 30s linear infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '700px',
            height: '700px',
            border: '1px solid rgba(196, 163, 90, 0.05)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 2,
            animation: 'spin 45s linear infinite reverse',
          }}
        />

        {/* Top decorative line */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1px',
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, rgba(196, 163, 90, 0.4), transparent)',
            zIndex: 3,
          }}
        />

        {/* Content — layered above everything */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
          {/* Label with animated border */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
              padding: '0.6rem 1.5rem',
              border: '1px solid rgba(196, 163, 90, 0.25)',
              borderRadius: '100px',
              background: 'rgba(196, 163, 90, 0.05)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                background: '#c4a35a',
                borderRadius: '50%',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '4px',
                color: '#c4a35a',
              }}
            >
              About Us
            </span>
          </div>

          {/* Main headline — dramatic scale */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
            }}
          >
            <span
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #f0f0f5 0%, #c4a35a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Trusted.
            </span>
            <span
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #f0f0f5 0%, #888899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Honest.
            </span>
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: '#c4a35a',
                marginTop: '0.2em',
              }}
            >
              Community.
            </span>
          </h1>

          {/* Animated divider line */}
          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #c4a35a, transparent)',
              margin: '0 auto 2rem',
              animation: 'expand-line 3s ease-in-out infinite',
            }}
          />

          {/* Tagline */}
          <p
            style={{
              fontSize: '1.15rem',
              color: '#888899',
              maxWidth: '480px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Our future is too important for guesswork. We make sure it never comes to that.
          </p>

          {/* CTA with glow */}
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(196, 163, 90, 0.2) 0%, transparent 70%)',
                filter: 'blur(20px)',
                animation: 'breathe 4s ease-in-out infinite',
                pointerEvents: 'none',
              }}
            />
            <Link href="/contact" style={{ position: 'relative', zIndex: 1 }}>
              <LiquidMetalButton label="Book Free Consultation" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '-120px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: '#888899',
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(to bottom, #c4a35a, transparent)',
                animation: 'scroll-line 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Corner accents */}
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            width: '60px',
            height: '60px',
            borderTop: '1px solid rgba(196, 163, 90, 0.15)',
            borderLeft: '1px solid rgba(196, 163, 90, 0.15)',
            zIndex: 3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            width: '60px',
            height: '60px',
            borderTop: '1px solid rgba(196, 163, 90, 0.15)',
            borderRight: '1px solid rgba(196, 163, 90, 0.15)',
            zIndex: 3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            width: '60px',
            height: '60px',
            borderBottom: '1px solid rgba(196, 163, 90, 0.15)',
            borderLeft: '1px solid rgba(196, 163, 90, 0.15)',
            zIndex: 3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            width: '60px',
            height: '60px',
            borderBottom: '1px solid rgba(196, 163, 90, 0.15)',
            borderRight: '1px solid rgba(196, 163, 90, 0.15)',
            zIndex: 3,
          }}
        />
      </section>

      {/* Keyframe animations injected via style tag */}
      <style jsx global>{`
        @keyframes breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(196, 163, 90, 0.4); }
          50% { opacity: 0.7; transform: scale(1.2); box-shadow: 0 0 0 8px rgba(196, 163, 90, 0); }
        }
        @keyframes expand-line {
          0%, 100% { width: 60px; opacity: 0.5; }
          50% { width: 100px; opacity: 1; }
        }
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Our Story */}
      <section
        id="story"
        style={{ padding: '8rem 4rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}
      >
        <div className="fade-in" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              color: '#c4a35a',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '40px',
                height: '1px',
                background: '#c4a35a',
              }}
            />
            Our Story
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            We saw what was broken.
            <br />
            So we built something better.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          <div className="fade-in">
            <p
              style={{
                color: '#f0f0f5',
                fontSize: '1.2rem',
                fontWeight: 500,
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              Before Rhinny Global existed, our founder spent years working inside the study abroad industry. What they saw was not reassuring.
            </p>
            <p style={{ color: '#888899', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Students were being sold dreams without details. Parents were parting with life savings to agents who vanished after receiving payment. Visa rejections were explained away.
            </p>
            <p style={{ color: '#888899', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Nobody was really walking with the student — they were just processing them.
            </p>
            <p style={{ color: '#888899', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              That experience became the foundation of everything Rhinny Global stands for. Not because it made us bitter — but because it made us clear. We knew exactly what was missing, and we knew we could fill that gap with something real.
            </p>
            <p style={{ color: '#f0f0f5', fontWeight: 500, fontSize: '1.05rem' }}>
              Rhinny Global was built for the student in Lagos who has researched universities at midnight. For the parent in Abuja who is afraid of being cheated again. For the young person in Accra, Nairobi or Dakar who has a dream but no roadmap. <strong>We are that roadmap.</strong>
            </p>
          </div>

          <div
            className="fade-in"
            style={{
              background: '#111118',
              borderLeft: '3px solid #c4a35a',
              padding: '2.5rem',
              borderRadius: '0 12px 12px 0',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '6rem',
                color: '#c4a35a',
                opacity: 0.2,
                position: 'absolute',
                top: '-10px',
                left: '20px',
                lineHeight: 1,
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.4rem',
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: '#f0f0f5',
                position: 'relative',
                zIndex: 1,
              }}
            >
              We did not start Rhinny Global to be another agency. We started it to be the agency we wished existed when we were on the inside watching students fall through the cracks.
            </p>
          </div>
        </div>

        {/* Values */}
        <div
          className="fade-in"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginTop: '3rem',
          }}
        >
          <div
            style={{
              background: '#111118',
              border: '1px solid #2a2a35',
              padding: '2.5rem',
              borderRadius: '16px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.3)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#2a2a35'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(196, 163, 90, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
              }}
            >
              ◉
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Radical Honesty</h3>
            <p style={{ color: '#888899', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We tell you what is possible and what is not — before you pay a single kobo.
            </p>
          </div>

          <div
            style={{
              background: '#111118',
              border: '1px solid #2a2a35',
              padding: '2.5rem',
              borderRadius: '16px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.3)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#2a2a35'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(196, 163, 90, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
              }}
            >
              ◈
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Community Over Transaction</h3>
            <p style={{ color: '#888899', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Our relationship with you does not end when your visa is approved.
            </p>
          </div>

          <div
            style={{
              background: '#111118',
              border: '1px solid #2a2a35',
              padding: '2.5rem',
              borderRadius: '16px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.3)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#2a2a35'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(196, 163, 90, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
              }}
            >
              ◎
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Africa-First Perspective</h3>
            <p style={{ color: '#888899', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We understand the realities of studying abroad from this continent — because we live them.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="vision"
        style={{ padding: '8rem 4rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}
      >
        <div className="fade-in" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              color: '#c4a35a',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', background: '#c4a35a' }} />
            What Drives Us
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            The principles that guide
            <br />
            every decision we make.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div
            className="fade-in"
            style={{
              background: '#111118',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #2a2a35',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a35'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'rgba(196, 163, 90, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontSize: '1.75rem',
              }}
            >
              ◎
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
              }}
            >
              Our Vision
            </h3>
            <p style={{ color: '#888899', fontSize: '1.05rem', lineHeight: 1.7 }}>
              To become the most trusted study abroad agency across Africa — a community where every student, regardless of background, has access to honest guidance and a real pathway to world-class education.
            </p>
          </div>

          <div
            className="fade-in"
            style={{
              background: '#111118',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #2a2a35',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a35'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'rgba(196, 163, 90, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontSize: '1.75rem',
              }}
            >
              ◈
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
              }}
            >
              Our Mission
            </h3>
            <p style={{ color: '#888899', fontSize: '1.05rem', lineHeight: 1.7 }}>
              We walk with students from the very first question to the day they arrive on campus. With transparency, genuine care, and a community that stays with you long after your visa is approved — because that is what you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section
        id="roadmap"
        style={{ padding: '8rem 4rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}
      >
        <div className="fade-in" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              color: '#c4a35a',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', background: '#c4a35a' }} />
            Where We Are Going
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Our journey has just begun.
            <br />
            Here is what is next.
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: '24px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: '#2a2a35',
            }}
          />

          {/* Roadmap Item 1 */}
          <div
            className="fade-in"
            style={{ display: 'flex', gap: '2.5rem', marginBottom: '4rem', position: 'relative' }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                background: '#111118',
                border: '2px solid #c4a35a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#c4a35a',
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c4a35a'
                e.currentTarget.style.color = '#0a0a0f'
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111118'
                e.currentTarget.style.color = '#c4a35a'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              01
            </div>
            <div
              style={{
                background: '#111118',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #2a2a35',
                flex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.3)'
                e.currentTarget.style.transform = 'translateX(5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a2a35'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  marginBottom: '0.75rem',
                  color: '#c4a35a',
                }}
              >
                100 Successful Placements
              </h3>
              <p style={{ color: '#888899', fontSize: '1rem', lineHeight: 1.7 }}>
                Build a proven track record that speaks for itself. Every student placed is a story told and a family's trust earned. This is our foundation year.
              </p>
            </div>
          </div>

          {/* Roadmap Item 2 */}
          <div
            className="fade-in"
            style={{ display: 'flex', gap: '2.5rem', marginBottom: '4rem', position: 'relative' }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                background: '#111118',
                border: '2px solid #c4a35a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#c4a35a',
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c4a35a'
                e.currentTarget.style.color = '#0a0a0f'
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111118'
                e.currentTarget.style.color = '#c4a35a'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              02
            </div>
            <div
              style={{
                background: '#111118',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #2a2a35',
                flex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.3)'
                e.currentTarget.style.transform = 'translateX(5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a2a35'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  marginBottom: '0.75rem',
                  color: '#c4a35a',
                }}
              >
                Expanding Across Africa
              </h3>
              <p style={{ color: '#888899', fontSize: '1rem', lineHeight: 1.7 }}>
                Having built a trusted name in Nigeria, we take Rhinny Global beyond our borders — starting with West Africa and reaching further with every step.
              </p>
            </div>
          </div>

          {/* Roadmap Item 3 */}
          <div
            className="fade-in"
            style={{ display: 'flex', gap: '2.5rem', marginBottom: '4rem', position: 'relative' }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                background: '#111118',
                border: '2px solid #c4a35a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#c4a35a',
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c4a35a'
                e.currentTarget.style.color = '#0a0a0f'
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111118'
                e.currentTarget.style.color = '#c4a35a'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              03
            </div>
            <div
              style={{
                background: '#111118',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #2a2a35',
                flex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.3)'
                e.currentTarget.style.transform = 'translateX(5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a2a35'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  marginBottom: '0.75rem',
                  color: '#c4a35a',
                }}
              >
                A Pan-African Presence
              </h3>
              <p style={{ color: '#888899', fontSize: '1rem', lineHeight: 1.7 }}>
                From Nigeria to Ghana, Kenya, Ethiopia, South Africa and beyond — because the dream of studying abroad belongs to every African student, not just a few.
              </p>
            </div>
          </div>

          {/* Roadmap Item 4 */}
          <div
            className="fade-in"
            style={{ display: 'flex', gap: '2.5rem', position: 'relative' }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                background: '#111118',
                border: '2px solid #c4a35a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#c4a35a',
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c4a35a'
                e.currentTarget.style.color = '#0a0a0f'
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111118'
                e.currentTarget.style.color = '#c4a35a'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              04
            </div>
            <div
              style={{
                background: '#111118',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #2a2a35',
                flex: 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.3)'
                e.currentTarget.style.transform = 'translateX(5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a2a35'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  marginBottom: '0.75rem',
                  color: '#c4a35a',
                }}
              >
                2,000+ Students Placed
              </h3>
              <p style={{ color: '#888899', fontSize: '1rem', lineHeight: 1.7 }}>
                Over two thousand lives changed. Families across Africa who trusted us with something precious — and were never let down. That is the Rhinny Global legacy we are building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="why-us"
        style={{ padding: '8rem 4rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}
      >
        <div className="fade-in" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              color: '#c4a35a',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', background: '#c4a35a' }} />
            Why Rhinny Global
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Three reasons to trust us
            <br />
            with your future.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          <div
            className="fade-in"
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              background: '#111118',
              borderRadius: '20px',
              border: '1px solid #2a2a35',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.2)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#2a2a35'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ fontSize: '2.5rem', marginBottom: '1.5rem', display: 'block' }}>🏢</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Industry Insiders</h3>
            <p style={{ color: '#888899', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We have worked inside the system. We know the shortcuts agents take and we refuse to take them with your future.
            </p>
          </div>

          <div
            className="fade-in"
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              background: '#111118',
              borderRadius: '20px',
              border: '1px solid #2a2a35',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.2)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#2a2a35'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ fontSize: '2.5rem', marginBottom: '1.5rem', display: 'block' }}>👥</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Built on Community</h3>
            <p style={{ color: '#888899', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Our students become our ambassadors. Real faces, real stories — not stock photos and fabricated testimonials.
            </p>
          </div>

          <div
            className="fade-in"
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              background: '#111118',
              borderRadius: '20px',
              border: '1px solid #2a2a35',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.2)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#2a2a35'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ fontSize: '2.5rem', marginBottom: '1.5rem', display: 'block' }}>🌍</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>A Pan-African Vision</h3>
            <p style={{ color: '#888899', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We think beyond Nigeria. We are building for the entire continent — every student who dares to dream of a world-class education.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem 8rem' }}>
        <div
          className="fade-in"
          style={{
            textAlign: 'center',
            padding: '6rem 2rem',
            background: '#111118',
            borderRadius: '24px',
            border: '1px solid #2a2a35',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at center, rgba(196, 163, 90, 0.05) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              position: 'relative',
            }}
          >
            Ready to start your journey <em style={{ color: '#c4a35a', fontStyle: 'italic' }}>abroad?</em>
          </h2>
          <p
            style={{
              color: '#888899',
              maxWidth: '500px',
              margin: '0 auto 2rem',
              fontSize: '1.1rem',
              position: 'relative',
            }}
          >
            Book a free consultation with our team. No pressure, no hidden charges — just an honest conversation about what is possible for you.
          </p>
          <Link href="/contact" style={{ position: 'relative' }}>
            <LiquidMetalButton label="Start Your Journey" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
'''