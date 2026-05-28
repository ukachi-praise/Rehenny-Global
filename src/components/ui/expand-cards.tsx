"use client";

import React, { useState } from "react";

interface ExpandOnHoverProps {
  images?: string[];
  height?: string;
  defaultExpandedIndex?: number;
}

const defaultImagesList = [
  "/assets/whychoose/why_choose_1.png",
  "/assets/whychoose/why_choose_2.png",
  "/assets/whychoose/why_choose_3.png",
  "/assets/whychoose/why_choose_4.png",
  "/assets/whychoose/why_choose_5.png"
];

const ExpandOnHover: React.FC<ExpandOnHoverProps> = ({
  images = defaultImagesList,
  height = "24rem",
  defaultExpandedIndex = 2 // 0-indexed index 2 (the 3rd image)
}) => {
  const [expandedImage, setExpandedImage] = useState<number>(defaultExpandedIndex);

  // Proportional percentages to ensure perfect responsiveness without overflow
  const getCardWidth = (idx: number) => {
    if (idx === expandedImage) {
      return "72%";
    }
    return "7%";
  };

  // Staggered mountain-like heights for a highly premium, artistic masonry aesthetic
  const cardHeights = ["19rem", "23rem", "27rem", "21rem", "18rem"];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-6xl">
        <div className="flex w-full items-end justify-center gap-1.5 sm:gap-2.5">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[28px] transition-all duration-500 ease-in-out border border-white/10 hover:border-white/20 shadow-xl"
              style={{
                width: getCardWidth(idx),
                height: cardHeights[idx] || "22rem",
                willChange: "width"
              }}
              onMouseEnter={() => setExpandedImage(idx)}
            >
              <img
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-105"
                src={src}
                alt={`Why Choose Us Gallery ${idx + 1}`}
              />
              {/* Subtle visual backdrop shadow mask for active state */}
              <div 
                className={`absolute inset-0 bg-black/15 transition-opacity duration-500 pointer-events-none ${
                  idx === expandedImage ? "opacity-0" : "opacity-45"
                }`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandOnHover;
