'use client'
import { useEffect } from 'react'
import './about.css'

export default function AboutPage() {
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

    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
       <nav id="navbar">
        <a href="#" className="logo">Rhinny<span>.</span>Global</a>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#stories">Stories</a></li>
        </ul>
        <button className="mobile-menu-btn">☰</button>
    </nav>

    <section className="hero" id="home">
        <div className="hero-label">About Us</div>
        <h1>Trusted. Honest.<br/><em>Community.</em></h1>
        <p className="hero-tagline">Our future is too important for guesswork. We make sure it never comes to that.</p>
        <a href="#consultation" className="hero-cta">
            Book Free Consultation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
    </section>

    <section id="story">
        <div className="section-header fade-in">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">We saw what was broken.<br/>So we built something better.</h2>
        </div>

        <div className="story-section">
            <div className="story-content fade-in">
                <p className="lead">Before Rhinny Global existed, our founder spent years working inside the study abroad industry. What they saw was not reassuring.</p>
                <p>Students were being sold dreams without details. Parents were parting with life savings to agents who vanished after receiving payment. Visa rejections were explained away.</p>
                <p>Nobody was really walking with the student — they were just processing them.</p>
                <p>That experience became the foundation of everything Rhinny Global stands for. Not because it made us bitter — but because it made us clear. We knew exactly what was missing, and we knew we could fill that gap with something real.</p>
                <p style={{color: 'var(--color-text)', fontWeight: 500}}>Rhinny Global was built for the student in Lagos who has researched universities at midnight. For the parent in Abuja who is afraid of being cheated again. For the young person in Accra, Nairobi or</p></div>
        </div>
    </section>
    </div>
  )
}
