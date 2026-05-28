// SectionDivider.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionDividerProps {
  /** The background color of the section ABOVE the divider */
  fromColor?: string;
  /** The background color of the section BELOW the divider */
  toColor?: string;
  /** Flip the wave direction (bottom of section vs top of next) */
  flip?: boolean;
  /** Which wave style to use */
  variant?: "gentle" | "deep" | "sharp" | "layered";
  /** Animate the wave on scroll */
  animated?: boolean;
  /** Pull the divider up by its height to overlap the previous section */
  overlap?: boolean;
}

const WAVES = {
  gentle: {
    path1: "M0,40 C180,90 360,-10 540,50 C720,110 900,20 1080,60 C1260,100 1440,30 1440,30 L1440,80 L0,80 Z",
    path2: "M0,55 C200,10 400,80 600,45 C800,10 1000,70 1200,40 C1350,20 1440,50 1440,50 L1440,80 L0,80 Z",
    path3: "M0,65 C150,30 350,75 550,55 C750,35 950,65 1150,50 C1300,38 1440,58 1440,58 L1440,80 L0,80 Z",
    height: 80,
  },
  deep: {
    path1: "M0,20 C240,110 480,-20 720,60 C960,140 1200,-10 1440,50 L1440,120 L0,120 Z",
    path2: "M0,50 C300,5  600,100 900,50 C1100,15 1300,80 1440,55 L1440,120 L0,120 Z",
    path3: "M0,75 C200,40 500,100 800,65 C1050,38 1280,85 1440,70 L1440,120 L0,120 Z",
    height: 120,
  },
  sharp: {
    path1: "M0,0 C360,80 720,0 1080,80 C1260,120 1440,40 1440,40 L1440,100 L0,100 Z",
    path2: "M0,30 C400,10 800,90 1200,30 C1350,10 1440,50 1440,50 L1440,100 L0,100 Z",
    path3: "M0,55 C300,20 700,80 1100,45 C1300,25 1440,60 1440,60 L1440,100 L0,100 Z",
    height: 100,
  },
  layered: {
    path1: "M0,30 C200,80 400,10 600,60 C800,110 1000,20 1200,55 C1350,80 1440,35 1440,35 L1440,100 L0,100 Z",
    path2: "M0,50 C250,20 500,80 750,45 C1000,10 1200,70 1440,45 L1440,100 L0,100 Z",
    path3: "M0,68 C200,42 450,78 700,58 C950,38 1200,72 1440,60 L1440,100 L0,100 Z",
    height: 100,
  },
};

export default function SectionDivider({
  fromColor = "#ffffff",
  toColor = "#0a0f1e",
  flip = false,
  variant = "layered",
  animated = true,
  overlap = false,
}: SectionDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const wave = WAVES[variant];

  useEffect(() => {
    if (!animated || !path1Ref.current || !path2Ref.current) return;

    gsap.to(path1Ref.current, {
      attr: { d: wave.path2 },
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(path2Ref.current, {
      attr: { d: wave.path3 },
      duration: 5.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.8,
    });


    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animated, wave]);

  const height = wave.height;

  return (
    <div
      className="relative w-full overflow-hidden pointer-events-none select-none"
      style={{
        height: `${height}px`,
        background: fromColor,
        marginTop: overlap ? `-${height}px` : undefined,
        marginBottom: `-1px`,
        zIndex: overlap ? 20 : 10,
      }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: `${height + 2}px`,
          transform: flip ? "scaleY(-1)" : undefined,
          display: "block",
        }}
        aria-hidden="true"
      >
        <path d={wave.path3} fill={toColor} opacity="0.3" />
        <path ref={path2Ref} d={wave.path2} fill={toColor} opacity="0.6" />
        <path ref={path1Ref} d={wave.path1} fill={toColor} opacity="1" />
      </svg>
    </div>
  );
}
