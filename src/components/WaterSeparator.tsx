'use client'

import React from 'react'

export type WavePattern = 'calm' | 'active' | 'swell' | 'ripple' | 'splash'

interface WaterSeparatorProps {
  /** The color of the main solid wave (should match the background of the section below/target section) */
  color: string
  /** The pattern style of the wave flow */
  pattern: WavePattern
  /** Optional custom color for the background wave currents (defaults to 'color') */
  waveColor?: string
  /** Optional secondary accent color (defaults to gold #D4AF37) */
  accentColor?: string
  /** Whether to show the luxurious gold/accent wave layer */
  showAccent?: boolean
  /** Additional wrapper CSS classes (e.g. for responsive heights) */
  className?: string
}

const PATTERNS = {
  calm: {
    back: "M 0 80 C 250 45, 250 115, 500 80 C 750 45, 750 115, 1000 80 C 1250 45, 1250 115, 1500 80 C 1750 45, 1750 115, 2000 80 L 2000 122 L 0 122 Z",
    middle: "M 0 65 C 250 30, 250 100, 500 65 C 750 30, 750 100, 1000 65 C 1250 30, 1250 100, 1500 65 C 1750 30, 1750 100, 2000 65 L 2000 122 L 0 122 Z",
    accent: "M 0 72 C 250 37, 250 107, 500 72 C 750 37, 750 107, 1000 72 C 1250 37, 1250 107, 1500 72 C 1750 37, 1750 107, 2000 72 L 2000 122 L 0 122 Z",
    front: "M 0 50 C 250 15, 250 85, 500 50 C 750 15, 750 85, 1000 50 C 1250 15, 1250 85, 1500 50 C 1750 15, 1750 85, 2000 50 L 2000 122 L 0 122 Z"
  },
  active: {
    back: "M 0 82 C 110 50, 140 114, 250 82 C 360 50, 390 114, 500 82 C 610 50, 640 114, 750 82 C 860 50, 890 114, 1000 82 C 1110 50, 1140 114, 1250 82 C 1360 50, 1390 114, 1500 82 C 1610 50, 1640 114, 1750 82 C 1860 50, 1890 114, 2000 82 L 2000 122 L 0 122 Z",
    middle: "M 0 72 C 100 40, 150 104, 250 72 C 350 40, 400 104, 500 72 C 600 40, 650 104, 750 72 C 850 40, 900 104, 1000 72 C 1100 40, 1150 104, 1250 72 C 1350 40, 1400 104, 1500 72 C 1600 40, 1650 104, 1750 72 C 1850 40, 1900 104, 2000 72 L 2000 122 L 0 122 Z",
    accent: "M 0 77 C 105 45, 145 109, 250 77 C 355 45, 395 109, 500 77 C 605 45, 645 109, 750 77 C 855 45, 895 109, 1000 77 C 1105 45, 1145 109, 1250 77 C 1355 45, 1395 109, 1500 77 C 1605 45, 1645 109, 1750 77 C 1855 45, 1895 109, 2000 77 L 2000 122 L 0 122 Z",
    front: "M 0 60 C 125 30, 125 90, 250 60 C 375 30, 375 90, 500 60 C 625 30, 625 90, 750 60 C 875 30, 875 90, 1000 60 C 1125 30, 1125 90, 1250 60 C 1375 30, 1375 90, 1500 60 C 1625 30, 1625 90, 1750 60 C 1875 30, 1875 90, 2000 60 L 2000 122 L 0 122 Z"
  },
  swell: {
    back: "M 0 78 C 280 30, 720 120, 1000 78 C 1280 30, 1720 120, 2000 78 L 2000 122 L 0 122 Z",
    middle: "M 0 65 C 250 20, 750 110, 1000 65 C 1250 20, 1750 110, 2000 65 L 2000 122 L 0 122 Z",
    accent: "M 0 70 C 265 25, 735 115, 1000 70 C 1265 25, 1735 115, 2000 70 L 2000 122 L 0 122 Z",
    front: "M 0 50 C 300 0, 700 100, 1000 50 C 1300 0, 1700 100, 2000 50 L 2000 122 L 0 122 Z"
  },
  ripple: {
    back: "M 0 85 C 75 70, 91 100, 166 85 C 241 70, 257 100, 333 85 C 408 70, 424 100, 500 85 C 575 70, 591 100, 666 85 C 741 70, 757 100, 833 85 C 908 70, 924 100, 1000 85 C 1083 70, 1083 100, 1166 85 C 1249 70, 1249 100, 1333 85 C 1416 70, 1416 100, 1500 85 C 1583 70, 1583 100, 1666 85 C 1741 70, 1757 100, 1833 85 C 1908 70, 1924 100, 2000 85 L 2000 122 L 0 122 Z",
    middle: "M 0 78 C 70 60, 96 96, 166 78 C 236 60, 262 96, 333 78 C 403 60, 429 96, 500 78 C 570 60, 596 96, 666 78 C 736 60, 762 96, 833 78 C 903 60, 929 96, 1000 78 C 1070 60, 1096 96, 1166 78 C 1236 60, 1262 96, 1333 78 C 1403 60, 1429 96, 1500 78 C 1570 60, 1596 96, 1666 78 C 1736 60, 1762 96, 1833 78 C 1903 60, 1929 96, 2000 78 L 2000 122 L 0 122 Z",
    accent: "M 0 81 C 72 65, 93 98, 166 81 C 238 65, 259 98, 333 81 C 405 65, 426 98, 500 81 C 572 65, 593 98, 666 81 C 738 65, 759 98, 833 81 C 905 65, 926 98, 1000 81 C 1072 65, 1093 98, 1166 81 C 1238 65, 1259 98, 1333 81 C 1405 65, 1426 98, 1500 81 C 1572 65, 1593 98, 1666 81 C 1738 65, 1759 98, 1833 81 C 1905 65, 1926 98, 2000 81 L 2000 122 L 0 122 Z",
    front: "M 0 70 C 83 50, 83 90, 166 70 C 249 50, 249 90, 333 70 C 416 50, 416 90, 500 70 C 583 50, 583 90, 666 70 C 749 50, 749 90, 833 70 C 916 50, 916 90, 1000 70 C 1083 50, 1083 90, 1166 70 C 1249 50, 1249 90, 1333 70 C 1416 50, 1416 90, 1500 70 C 1583 50, 1583 90, 1666 70 C 1749 50, 1749 90, 1833 70 C 1916 50, 1916 90, 2000 70 L 2000 122 L 0 122 Z"
  },
  splash: {
    back: "M 0 86 C 90 35, 160 120, 500 86 C 840 50, 910 120, 1000 86 C 1090 35, 1160 120, 1500 86 C 1840 50, 1910 120, 2000 86 L 2000 122 L 0 122 Z",
    middle: "M 0 78 C 80 20, 170 116, 500 78 C 830 40, 920 116, 1000 78 C 1080 20, 1170 116, 1500 78 C 1830 40, 1920 116, 2000 78 L 2000 122 L 0 122 Z",
    accent: "M 0 82 C 85 27, 165 118, 500 82 C 835 45, 915 118, 1000 82 C 1085 27, 1165 118, 1500 82 C 1835 45, 1915 118, 2000 82 L 2000 122 L 0 122 Z",
    front: "M 0 70 C 100 10, 150 110, 500 70 C 850 30, 900 110, 1000 70 C 1100 10, 1150 110, 1500 70 C 1850 30, 1900 110, 2000 70 L 2000 122 L 0 122 Z"
  }
}

export default function WaterSeparator({
  color,
  pattern,
  waveColor,
  accentColor = '#D4AF37',
  showAccent = true,
  className = 'h-12 sm:h-16 md:h-20 lg:h-24',
}: WaterSeparatorProps) {
  const paths = PATTERNS[pattern] || PATTERNS.calm
  const bgWaveColor = waveColor || color

  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-20 pointer-events-none select-none bg-transparent -mt-[1px] -mb-[2px] ${className}`}
    >
      <svg
        className="absolute top-0 left-0 w-[200%] h-[102%]"
        viewBox="0 0 2000 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 4: Back Wave (Slowest) */}
        <g className="animate-sway-1">
          <path
            d={paths.back}
            fill={bgWaveColor}
            opacity="0.12"
            className="animate-flow-left"
            style={{ '--duration': '24s' } as React.CSSProperties}
          />
        </g>

        {/* Layer 3: Middle Wave (Medium speed) */}
        <g className="animate-sway-2">
          <path
            d={paths.middle}
            fill={bgWaveColor}
            opacity="0.25"
            className="animate-flow-right"
            style={{ '--duration': '18s' } as React.CSSProperties}
          />
        </g>

        {/* Layer 2: Gold/Accent Wave */}
        {showAccent && (
          <g className="animate-sway-3">
            <path
              d={paths.accent}
              fill={accentColor}
              opacity="0.32"
              className="animate-flow-left"
              style={{ '--duration': '12s' } as React.CSSProperties}
            />
          </g>
        )}

        {/* Layer 1: Front Wave (Solid color, blends into target section below) */}
        <g className="animate-sway-4">
          <path
            d={paths.front}
            fill={color}
            className="animate-flow-right"
            style={{ '--duration': '8s' } as React.CSSProperties}
          />
        </g>
      </svg>
    </div>
  )
}
