// src/components/UserPhotoCapture.tsx
"use client";

import { useState, ChangeEvent } from "react";

/**
 * UserPhotoCapture
 * ------------------------------------------------
 * A simple client‑side component that lets a user select an image file
 * (or capture via webcam in future extensions) and displays the picture
 * in a large, visually striking container.
 *
 * The component uses TailwindCSS utilities for a premium look:
 *  - A circular preview with a subtle glass‑morphism background.
 *  - Hover animation to draw attention.
 *  - Responsive sizing for mobile and desktop.
 */
export default function UserPhotoCapture() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (load) => {
      setImageSrc(load.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {/* Upload Button */}
      <label
        htmlFor="user-photo-upload"
        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
        Choose Photo
        <input
          id="user-photo-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Image Preview */}
      {imageSrc && (
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <img
            src={imageSrc}
            alt="User upload"
            className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-lg transition-transform duration-300 hover:scale-105"
          />
          {/* Optional overlay for visual emphasis */}
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm pointer-events-none" />
        </div>
      )}
    </div>
  );
}
