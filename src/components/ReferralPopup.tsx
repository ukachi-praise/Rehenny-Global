'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { X, Gift, Users, ArrowRight } from 'lucide-react'

interface ReferralPopupProps {
  // Time between popups in minutes (default: 30)
  intervalMinutes?: number
  // Delay before first popup on page load in seconds (default: 5)
  initialDelaySeconds?: number
  // Cookie/storage key to track last shown time
  storageKey?: string
}

export default function ReferralPopup({
  intervalMinutes = 30,
  initialDelaySeconds = 5,
  storageKey = 'rhinny-referral-popup-last-shown',
}: ReferralPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const showPopup = useCallback(() => {
    setIsAnimating(true)
    // Small delay to trigger CSS transition
    setTimeout(() => setIsVisible(true), 50)
  }, [])

  const hidePopup = useCallback(() => {
    setIsVisible(false)
    // Wait for exit animation before removing from DOM consideration
    setTimeout(() => setIsAnimating(false), 400)
  }, [])

  const handleClose = useCallback(() => {
    hidePopup()
    // Store timestamp
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, Date.now().toString())
    }
  }, [hidePopup, storageKey])

  useEffect(() => {
    // Check if we should show popup
    const shouldShow = () => {
      if (typeof window === 'undefined') return false

      const lastShown = localStorage.getItem(storageKey)
      if (!lastShown) return true

      const lastShownTime = parseInt(lastShown, 10)
      const now = Date.now()
      const intervalMs = intervalMinutes * 60 * 1000

      return now - lastShownTime > intervalMs
    }

    // Initial delay before checking/showing
    const timer = setTimeout(() => {
      if (shouldShow()) {
        showPopup()
      }
    }, initialDelaySeconds * 1000)

    return () => clearTimeout(timer)
  }, [initialDelaySeconds, intervalMinutes, storageKey, showPopup])

  // Don't render anything if not animating
  if (!isAnimating) return null

  return (
    <div
      className="referral-popup-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: isVisible ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isVisible ? 'blur(8px)' : 'blur(0px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      onClick={(e) => {
        // Close when clicking backdrop
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div
        className="referral-popup-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          background: 'linear-gradient(145deg, #111118 0%, #1a1a24 100%)',
          border: '1px solid rgba(196, 163, 90, 0.2)',
          borderRadius: '24px',
          padding: '2.5rem',
          overflow: 'hidden',
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(196, 163, 90, 0.1)',
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-30%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(196, 163, 90, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid rgba(196, 163, 90, 0.15)',
            background: 'rgba(196, 163, 90, 0.05)',
            color: '#888899',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(196, 163, 90, 0.15)'
            e.currentTarget.style.color = '#c4a35a'
            e.currentTarget.style.transform = 'rotate(90deg)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(196, 163, 90, 0.05)'
            e.currentTarget.style.color = '#888899'
            e.currentTarget.style.transform = 'rotate(0deg)'
          }}
        >
          <X size={18} />
        </button>

        {/* Gift icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'rgba(196, 163, 90, 0.1)',
            border: '1px solid rgba(196, 163, 90, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Gift size={28} color="#c4a35a" />
        </div>

        {/* Headline */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.6rem',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '0.75rem',
            color: '#f0f0f5',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Refer a Friend, <em style={{ color: '#c4a35a', fontStyle: 'italic' }}>Earn Together</em>
        </h3>

        {/* Subheadline */}
        <p
          style={{
            fontSize: '0.95rem',
            color: '#888899',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Know someone dreaming of studying abroad? Refer them to Rhinny Global and earn rewards when they successfully enrol. It is our way of saying thank you for spreading the word.
        </p>

        {/* Benefits row */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: '1rem',
              background: 'rgba(196, 163, 90, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(196, 163, 90, 0.1)',
              textAlign: 'center',
            }}
          >
            <Users size={20} color="#c4a35a" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f0f0f5' }}>Refer Friends</div>
          </div>
          <div
            style={{
              flex: 1,
              padding: '1rem',
              background: 'rgba(196, 163, 90, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(196, 163, 90, 0.1)',
              textAlign: 'center',
            }}
          >
            <Gift size={20} color="#c4a35a" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f0f0f5' }}>Earn Rewards</div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/referral"
          onClick={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            width: '100%',
            padding: '1rem 1.5rem',
            background: '#c4a35a',
            color: '#0a0a0f',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#d4b76a'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(196, 163, 90, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#c4a35a'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Learn More
          <ArrowRight size={18} />
        </Link>

        {/* Dismiss text */}
        <button
          onClick={handleClose}
          style={{
            display: 'block',
            margin: '1rem auto 0',
            background: 'none',
            border: 'none',
            color: '#888899',
            fontSize: '0.75rem',
            cursor: 'pointer',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            transition: 'color 0.3s ease',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#c4a35a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#888899'
          }}
        >
          Maybe later
        </button>
      </div>
    </div>
  )
}
