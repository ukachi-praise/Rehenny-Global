'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"
import { Building2, Users, Globe, ShieldCheck, HeartHandshake, Eye, Target } from 'lucide-react'

export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)

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
      clearTimeout(timer)
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-glow" />

        <div className="hero-content">
          <div
            className="hero-since"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            }}
          >
            Since 2024
          </div>

          <div
            className="hero-badge"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}
          >
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">About Us</span>
          </div>

          <h1 className="hero-headline">
            <span
              className="hero-line hero-line-1"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.35s',
              }}
            >
              Trusted.
            </span>
            <span
              className="hero-line hero-line-2"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
              }}
            >
              Honest.
            </span>
            <span
              className="hero-line hero-line-3"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.65s',
              }}
            >
              Community.
            </span>
          </h1>

          <div
            className="hero-divider"
            style={{
              width: heroVisible ? '80px' : '0px',
              transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.85s',
            }}
          />

          <p
            className="hero-tagline-primary"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(25px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s',
            }}
          >
            Our future is too important for guesswork. We make sure it never comes to that.
          </p>

          <p
            className="hero-tagline-secondary"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.15s',
            }}
          >
            Honest guidance. Real pathways. No shortcuts.
          </p>

          <div
            className="hero-trust-bar"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.3s',
            }}
          >
            <span>Nigeria</span>
            <span className="hero-trust-dot">·</span>
            <span>Ghana</span>
            <span className="hero-trust-dot">·</span>
            <span>Kenya</span>
            <span className="hero-trust-dot">·</span>
            <span>Ethiopia</span>
            <span className="hero-trust-dot">·</span>
            <span>South Africa</span>
          </div>

          <div
            className="hero-cta-wrap"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.5s',
            }}
          >
            <div className="hero-cta-glow" />
            <Link href="/contact">
              <LiquidMetalButton label="Book Free Consultation" />
            </Link>
          </div>

          <div
            className="hero-scroll"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1s ease 2s',
            }}
          >
            <span className="hero-scroll-text">Scroll to discover our story</span>
            <div className="hero-scroll-line" />
          </div>
        </div>

        <div
          className="hero-vertical-quote"
          style={{
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 1.2s ease 1.8s',
          }}
        >
          Every student deserves an honest shot.
        </div>

        <div className="hero-corner hero-corner-tl" />
        <div className="hero-corner hero-corner-tr" />
        <div className="hero-corner hero-corner-bl" />
        <div className="hero-corner hero-corner-br" />
      </section>

      {/* Our Story */}
      <section className="section" id="story">
        <div className="section-header fade-in">
          <div className="section-label">
            <span className="section-label-line" />
            Our Story
          </div>
          <h2 className="section-title">
            We saw what was broken.<br/>So we built something better.
          </h2>
        </div>

        <div className="story-grid">
          <div className="story-left fade-in">
            <p className="story-lead">
              Before Rhinny Global existed, our founder spent years working inside the study abroad industry. What they saw was not reassuring.
            </p>
            <p className="story-body">
              Students were being sold dreams without details. Parents were parting with life savings to agents who vanished after receiving payment. Visa rejections were explained away.
            </p>
            <p className="story-body">
              Nobody was really walking with the student — they were just processing them.
            </p>
            <p className="story-body">
              That experience became the foundation of everything Rhinny Global stands for. Not because it made us bitter — but because it made us clear. We knew exactly what was missing, and we knew we could fill that gap with something real.
            </p>
            <p className="story-closing">
              Rhinny Global was built for the student in Lagos who has researched universities at midnight. For the parent in Abuja who is afraid of being cheated again. For the young person in Accra, Nairobi or Dakar who has a dream but no roadmap. <strong>We are that roadmap.</strong>
            </p>
          </div>

          <div className="story-quote fade-in">
            <span className="story-quote-mark">&ldquo;</span>
            <p className="story-quote-text">
              We did not start Rhinny Global to be another agency. We started it to be the agency we wished existed when we were on the inside watching students fall through the cracks.
            </p>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card fade-in">
            <div className="value-icon"><ShieldCheck color="#c4a35a" /></div>
            <h3 className="value-title">Radical Honesty</h3>
            <p className="value-desc">We tell you what is possible and what is not — before you pay a single kobo.</p>
          </div>
          <div className="value-card fade-in">
            <div className="value-icon"><HeartHandshake color="#c4a35a" /></div>
            <h3 className="value-title">Community Over Transaction</h3>
            <p className="value-desc">Our relationship with you does not end when your visa is approved.</p>
          </div>
          <div className="value-card fade-in">
            <div className="value-icon"><Globe color="#c4a35a" /></div>
            <h3 className="value-title">Africa-First Perspective</h3>
            <p className="value-desc">We understand the realities of studying abroad from this continent — because we live them.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section" id="vision">
        <div className="section-header fade-in">
          <div className="section-label">
            <span className="section-label-line" />
            What Drives Us
          </div>
          <h2 className="section-title">
            The principles that guide<br/>every decision we make.
          </h2>
        </div>

        <div className="vm-grid">
          <div className="vm-card fade-in">
            <div className="vm-icon"><Eye color="#c4a35a" size={28}/></div>
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-text">To become the most trusted study abroad agency across Africa — a community where every student, regardless of background, has access to honest guidance and a real pathway to world-class education.</p>
          </div>
          <div className="vm-card fade-in">
            <div className="vm-icon"><Target color="#c4a35a" size={28}/></div>
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-text">We walk with students from the very first question to the day they arrive on campus. With transparency, genuine care, and a community that stays with you long after your visa is approved — because that is what you deserve.</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section" id="roadmap">
        <div className="section-header fade-in">
          <div className="section-label">
            <span className="section-label-line" />
            Where We Are Going
          </div>
          <h2 className="section-title">
            Our journey has just begun.<br/>Here is what is next.
          </h2>
        </div>

        <div className="roadmap">
          <div className="roadmap-line" />

          <div className="roadmap-item fade-in">
            <div className="roadmap-marker">01</div>
            <div className="roadmap-content">
              <h3 className="roadmap-title">100 Successful Placements</h3>
              <p className="roadmap-desc">Build a proven track record that speaks for itself. Every student placed is a story told and a family's trust earned. This is our foundation year.</p>
            </div>
          </div>

          <div className="roadmap-item fade-in">
            <div className="roadmap-marker">02</div>
            <div className="roadmap-content">
              <h3 className="roadmap-title">Expanding Across Africa</h3>
              <p className="roadmap-desc">Having built a trusted name in Nigeria, we take Rhinny Global beyond our borders — starting with West Africa and reaching further with every step.</p>
            </div>
          </div>

          <div className="roadmap-item fade-in">
            <div className="roadmap-marker">03</div>
            <div className="roadmap-content">
              <h3 className="roadmap-title">A Pan-African Presence</h3>
              <p className="roadmap-desc">From Nigeria to Ghana, Kenya, Ethiopia, South Africa and beyond — because the dream of studying abroad belongs to every African student, not just a few.</p>
            </div>
          </div>

          <div className="roadmap-item fade-in">
            <div className="roadmap-marker">04</div>
            <div className="roadmap-content">
              <h3 className="roadmap-title">2,000+ Students Placed</h3>
              <p className="roadmap-desc">Over two thousand lives changed. Families across Africa who trusted us with something precious — and were never let down. That is the Rhinny Global legacy we are building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" id="why-us">
        <div className="section-header fade-in">
          <div className="section-label">
            <span className="section-label-line" />
            Why Rhinny Global
          </div>
          <h2 className="section-title">
            Three reasons to trust us<br/>with your future.
          </h2>
        </div>

        <div className="features-grid">
          <div className="feature-item fade-in">
            <div className="feature-icon"><Building2 size={36} color="#c4a35a" /></div>
            <h3 className="feature-title">Industry Insiders</h3>
            <p className="feature-desc">We have worked inside the system. We know the shortcuts agents take and we refuse to take them with your future.</p>
          </div>
          <div className="feature-item fade-in">
            <div className="feature-icon"><Users size={36} color="#c4a35a" /></div>
            <h3 className="feature-title">Built on Community</h3>
            <p className="feature-desc">Our students become our ambassadors. Real faces, real stories — not stock photos and fabricated testimonials.</p>
          </div>
          <div className="feature-item fade-in">
            <div className="feature-icon"><Globe size={36} color="#c4a35a" /></div>
            <h3 className="feature-title">A Pan-African Vision</h3>
            <p className="feature-desc">We think beyond Nigeria. We are building for the entire continent — every student who dares to dream of a world-class education.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section-wrap">
        <div className="cta-section fade-in">
          <div className="cta-glow" />
          <h2 className="cta-title">
            Ready to start your journey <em style={{fontStyle: 'italic', color: '#c4a35a'}}>abroad?</em>
          </h2>
          <p className="cta-desc">
            Book a free consultation with our team. No pressure, no hidden charges — just an honest conversation about what is possible for you.
          </p>
          <Link href="/contact">
            <LiquidMetalButton label="Start Your Journey" />
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .about-page {
          background-color: #ffffff;
          color: #1a1a24;
          font-family: 'Inter', sans-serif;
          line-height: 1.7;
          overflow-x: hidden;
        }

        /* ========== HERO ========== */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 6rem 1.5rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(196, 163, 90, 0.1) 0%, transparent 60%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          width: 100%;
        }

        .hero-since {
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: #555566;
          margin-bottom: 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding: 0.6rem 1.8rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 100px;
          background: #f9f9f9;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          background: #c4a35a;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .hero-badge-text {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #c4a35a;
        }

        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 10vw, 8rem);
          font-weight: 700;
          line-height: 0.95;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          color: #1a1a24;
        }

        .hero-line {
          display: block;
        }

        .hero-line-1 {
          background: linear-gradient(135deg, #1a1a24 0%, #777 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-line-2 {
          background: linear-gradient(135deg, #1a1a24 0%, #555 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-line-3 {
          font-style: italic;
          color: #c4a35a;
          margin-top: 0.15em;
        }

        .hero-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #c4a35a, transparent);
          margin: 0 auto 1.5rem;
        }

        .hero-tagline-primary {
          font-size: 1.05rem;
          color: #555566;
          max-width: 480px;
          margin: 0 auto 1rem;
          line-height: 1.8;
          font-weight: 300;
        }

        .hero-tagline-secondary {
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #c4a35a;
          margin-bottom: 1.5rem;
        }

        .hero-trust-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #555566;
          flex-wrap: wrap;
        }

        .hero-trust-dot {
          color: #c4a35a;
          opacity: 0.5;
        }

        .hero-cta-wrap {
          position: relative;
          display: inline-block;
        }

        .hero-cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, rgba(196, 163, 90, 0.2) 0%, transparent 70%);
          filter: blur(25px);
          animation: breathe 4s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-scroll {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-scroll-text {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #888899;
        }

        .hero-scroll-line {
          width: 1px;
          height: 35px;
          background: linear-gradient(to bottom, #c4a35a, transparent);
          animation: scroll-line 2.5s ease-in-out infinite;
        }

        .hero-vertical-quote {
          position: absolute;
          left: 3rem;
          top: 50%;
          transform: translateY(-50%);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: 'Playfair Display', serif;
          font-size: 0.75rem;
          font-style: italic;
          letter-spacing: 3px;
          color: rgba(0, 0, 0, 0.2);
          display: none;
        }

        .hero-corner {
          position: absolute;
          width: 50px;
          height: 50px;
          z-index: 3;
        }

        .hero-corner-tl { top: 2rem; left: 2rem; border-top: 1px solid rgba(0,0,0, 0.1); border-left: 1px solid rgba(0,0,0, 0.1); }
        .hero-corner-tr { top: 2rem; right: 2rem; border-top: 1px solid rgba(0,0,0, 0.1); border-right: 1px solid rgba(0,0,0, 0.1); }
        .hero-corner-bl { bottom: 2rem; left: 2rem; border-bottom: 1px solid rgba(0,0,0, 0.1); border-left: 1px solid rgba(0,0,0, 0.1); }
        .hero-corner-br { bottom: 2rem; right: 2rem; border-bottom: 1px solid rgba(0,0,0, 0.1); border-right: 1px solid rgba(0,0,0, 0.1); }

        /* ========== SECTIONS ========== */
        .section {
          padding: 6rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #c4a35a;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-label-line {
          display: block;
          width: 40px;
          height: 1px;
          background: #c4a35a;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 600;
          line-height: 1.2;
          color: #1a1a24;
        }

        /* ========== STORY ========== */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .story-lead {
          color: #1a1a24;
          font-size: 1.15rem;
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .story-body {
          color: #555566;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .story-closing {
          color: #1a1a24;
          font-weight: 500;
          font-size: 1rem;
        }

        .story-quote {
          background: #f9f9f9;
          border-left: 3px solid #c4a35a;
          padding: 2rem;
          border-radius: 0 12px 12px 0;
          position: relative;
        }

        .story-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          color: #c4a35a;
          opacity: 0.2;
          position: absolute;
          top: -10px;
          left: 15px;
          line-height: 1;
        }

        .story-quote-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-style: italic;
          line-height: 1.6;
          color: #1a1a24;
          position: relative;
          z-index: 1;
        }

        /* ========== VALUES ========== */
        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .value-card {
          background: #f9f9f9;
          border: 1px solid #e0e0e0;
          padding: 2rem;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,0,0, 0.15);
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .value-icon {
          width: 48px;
          height: 48px;
          background: rgba(196, 163, 90, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .value-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #1a1a24;
        }

        .value-desc {
          color: #555566;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* ========== VISION & MISSION ========== */
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .vm-card {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #e0e0e0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .vm-card:hover {
          border-color: rgba(0,0,0, 0.15);
        }

        .vm-icon {
          width: 56px;
          height: 56px;
          background: rgba(196, 163, 90, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 1.75rem;
        }

        .vm-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          margin-bottom: 1rem;
          color: #1a1a24;
        }

        .vm-text {
          color: #555566;
          font-size: 1rem;
          line-height: 1.7;
        }

        /* ========== ROADMAP ========== */
        .roadmap {
          position: relative;
        }

        .roadmap-line {
          position: absolute;
          left: 19px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #e0e0e0;
        }

        .roadmap-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .roadmap-item:last-child {
          margin-bottom: 0;
        }

        .roadmap-marker {
          width: 40px;
          height: 40px;
          background: #ffffff;
          border: 2px solid #c4a35a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
          color: #c4a35a;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .roadmap-marker:hover {
          background: #c4a35a;
          color: #ffffff;
          transform: scale(1.1);
        }

        .roadmap-content {
          background: #f9f9f9;
          padding: 1.75rem;
          border-radius: 16px;
          border: 1px solid #e0e0e0;
          flex: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .roadmap-content:hover {
          border-color: rgba(0,0,0,0.15);
          transform: translateX(5px);
        }

        .roadmap-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #c4a35a;
        }

        .roadmap-desc {
          color: #555566;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* ========== FEATURES ========== */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .feature-item {
          text-align: center;
          padding: 2.5rem 1.5rem;
          background: #f9f9f9;
          border-radius: 20px;
          border: 1px solid #e0e0e0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-item:hover {
          transform: translateY(-5px);
          border-color: rgba(0,0,0,0.15);
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .feature-icon {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a24;
        }

        .feature-desc {
          color: #555566;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* ========== CTA ========== */
        .cta-section-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem 6rem;
        }

        .cta-section {
          text-align: center;
          padding: 4rem 1.5rem;
          background: #f9f9f9;
          border-radius: 24px;
          border: 1px solid #e0e0e0;
          position: relative;
          overflow: hidden;
        }

        .cta-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(196, 163, 90, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4vw, 3rem);
          margin-bottom: 1rem;
          position: relative;
          color: #1a1a24;
        }

        .cta-desc {
          color: #555566;
          max-width: 500px;
          margin: 0 auto 2rem;
          font-size: 1rem;
          position: relative;
        }

        /* ========== ANIMATIONS ========== */
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(196, 163, 90, 0.4); }
          50% { opacity: 0.7; transform: scale(1.3); box-shadow: 0 0 0 6px rgba(196, 163, 90, 0); }
        }

        @keyframes breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.9; }
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

        /* ========== TABLET (640px+) ========== */
        @media (min-width: 640px) {
          .hero {
            padding: 6rem 2rem 4rem;
          }

          .hero-headline {
            font-size: clamp(3.5rem, 10vw, 8rem);
          }

          .hero-tagline-primary {
            font-size: 1.15rem;
          }

          .section {
            padding: 7rem 2rem;
          }

          .story-quote {
            padding: 2.5rem;
          }

          .story-quote-mark {
            font-size: 6rem;
            left: 20px;
          }

          .story-quote-text {
            font-size: 1.4rem;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .value-card {
            padding: 2.5rem;
          }

          .vm-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .vm-card {
            padding: 2.5rem;
          }

          .vm-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .feature-item {
            padding: 3rem 2rem;
          }

          .cta-section {
            padding: 5rem 2rem;
          }

          .cta-desc {
            font-size: 1.1rem;
          }
        }

        /* ========== DESKTOP (968px+) ========== */
        @media (min-width: 968px) {
          .hero {
            padding: 8rem 2rem 4rem;
          }

          .hero-since {
            position: absolute;
            top: -80px;
            left: 0;
            margin-bottom: 0;
          }

          .hero-badge {
            margin-bottom: 2.5rem;
          }

          .hero-headline {
            margin-bottom: 2rem;
          }

          .hero-divider {
            margin-bottom: 2rem;
          }

          .hero-tagline-primary {
            margin-bottom: 1.25rem;
          }

          .hero-tagline-secondary {
            margin-bottom: 2rem;
          }

          .hero-trust-bar {
            margin-bottom: 3rem;
            flex-wrap: nowrap;
          }

          .hero-vertical-quote {
            display: block;
          }

          .section {
            padding: 8rem 4rem;
          }

          .section-header {
            margin-bottom: 4rem;
          }

          .story-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }

          .story-lead {
            font-size: 1.2rem;
          }

          .story-body {
            font-size: 1.05rem;
          }

          .story-closing {
            font-size: 1.05rem;
          }

          .values-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 3rem;
          }

          .vm-grid {
            gap: 3rem;
          }

          .vm-card {
            padding: 3rem;
          }

          .roadmap-line {
            left: 24px;
          }

          .roadmap-item {
            gap: 2.5rem;
            margin-bottom: 4rem;
          }

          .roadmap-marker {
            width: 50px;
            height: 50px;
            font-size: 0.85rem;
          }

          .roadmap-content {
            padding: 2.5rem;
          }

          .roadmap-title {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .features-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          .cta-section-wrap {
            padding: 0 2rem 8rem;
          }

          .cta-section {
            padding: 6rem 2rem;
          }
        }

        /* ========== LARGE DESKTOP (1200px+) ========== */
        @media (min-width: 1200px) {
          .hero-corner {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  )
}
