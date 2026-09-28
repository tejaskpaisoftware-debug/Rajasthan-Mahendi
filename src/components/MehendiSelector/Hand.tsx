'use client';

import React from 'react';

export default function Hand() {
  return (
    <g id="female-hand-realistic">
      {/* SVG Shading Filters */}
      <defs>
        {/* Soft Skin 3D Radial Shadow */}
        <radialGradient id="skinBaseGradient" cx="50%" cy="40%" r="60%" fx="40%" fy="30%">
          <stop offset="0%" stopColor="#F9ECE0" />
          <stop offset="60%" stopColor="#E9D3BE" />
          <stop offset="100%" stopColor="#D8BAA0" />
        </radialGradient>

        <linearGradient id="fingerShadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(160, 115, 85, 0.25)" />
          <stop offset="50%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(140, 95, 65, 0.2)" />
        </linearGradient>

        <linearGradient id="nailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDF5EC" />
          <stop offset="70%" stopColor="#F5E4D5" />
          <stop offset="100%" stopColor="#E3C4B0" />
        </linearGradient>

        {/* Soft Drop Shadow for Hand Depth */}
        <filter id="handShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#3D2612" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Hand Drop Shadow Surface */}
      <ellipse cx="250" cy="620" rx="130" ry="25" fill="rgba(80, 50, 25, 0.1)" filter="blur(8px)" />

      {/* Main Hand Outer Silhouette Path */}
      <path
        d="
          M 185 670 
          C 188 590, 165 525, 140 445 
          C 120 380, 110 325, 120 275 
          C 126 252, 142 242, 154 260 
          C 165 282, 172 322, 180 355 
          C 174 295, 168 222, 172 172 
          C 174 150, 192 145, 202 162 
          C 214 185, 222 255, 226 310 
          C 226 235, 227 140, 230 105 
          C 234 82, 254 80, 264 100 
          C 275 128, 274 225, 273 305 
          C 280 248, 290 160, 298 138 
          C 304 125, 322 128, 326 148 
          C 332 182, 326 255, 318 322 
          C 326 285, 342 225, 354 208 
          C 364 196, 378 208, 374 230 
          C 366 270, 344 355, 338 430 
          C 332 500, 325 580, 325 670 
          Z
        "
        fill="url(#skinBaseGradient)"
        stroke="#CBB096"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#handShadow)"
      />

      {/* Finger Shading Overlays for 3D Roundness */}
      {/* Thumb Shading */}
      <path d="M 120 275 C 130 330, 155 400, 175 440" stroke="rgba(160, 115, 85, 0.2)" strokeWidth="8" fill="none" />
      {/* Index Finger Shading */}
      <path d="M 172 172 C 180 250, 195 320, 200 360" stroke="rgba(160, 115, 85, 0.15)" strokeWidth="6" fill="none" />
      {/* Middle Finger Shading */}
      <path d="M 230 105 C 235 200, 240 280, 242 340" stroke="rgba(160, 115, 85, 0.15)" strokeWidth="7" fill="none" />
      {/* Ring Finger Shading */}
      <path d="M 298 138 C 295 220, 290 290, 285 330" stroke="rgba(160, 115, 85, 0.15)" strokeWidth="6" fill="none" />
      {/* Little Finger Shading */}
      <path d="M 354 208 C 345 280, 335 340, 330 380" stroke="rgba(160, 115, 85, 0.2)" strokeWidth="6" fill="none" />

      {/* Realistic Palm Anatomical Creases & Contours */}
      {/* Thenar Eminence (Palm Cushion Shadow) */}
      <path
        d="M 175 355 Q 215 410 225 490"
        fill="none"
        stroke="#BD9E82"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Head Line Crease */}
      <path
        d="M 152 315 Q 220 370 295 355"
        fill="none"
        stroke="#C4A488"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* Heart Line Crease */}
      <path
        d="M 178 295 Q 252 338 318 295"
        fill="none"
        stroke="#C4A488"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* Minor Palm Folds */}
      <path d="M 210 440 Q 235 460 270 450" fill="none" stroke="#D0B398" strokeWidth="1.2" opacity="0.5" />
      <path d="M 225 380 Q 260 395 285 385" fill="none" stroke="#D0B398" strokeWidth="1.2" opacity="0.5" />

      {/* Realistic Finger Joints & Knuckle Folds */}
      {/* Thumb Joint */}
      <path d="M 128 275 Q 140 285 152 280" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Index Finger Joints */}
      <path d="M 182 208 Q 194 213 204 208" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 185 252 Q 198 257 208 252" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Middle Finger Joints */}
      <path d="M 236 168 Q 248 173 258 168" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 238 222 Q 250 227 260 222" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Ring Finger Joints */}
      <path d="M 294 182 Q 306 187 314 182" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 292 238 Q 304 243 314 238" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Little Finger Joints */}
      <path d="M 342 252 Q 352 257 360 252" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 340 295 Q 350 300 358 295" stroke="#C4A488" strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* Elegant Manicured Nails */}
      {/* Thumb Nail */}
      <path d="M 122 256 C 124 244 135 244 142 253 C 138 262 125 262 122 256 Z" stroke="#C0A085" strokeWidth="1" fill="url(#nailGradient)" />
      {/* Index Nail */}
      <path d="M 174 162 C 177 150 190 150 194 162 C 190 170 178 170 174 162 Z" stroke="#C0A085" strokeWidth="1" fill="url(#nailGradient)" />
      {/* Middle Nail */}
      <path d="M 233 98 C 236 86 251 86 254 98 C 250 107 237 107 233 98 Z" stroke="#C0A085" strokeWidth="1" fill="url(#nailGradient)" />
      {/* Ring Nail */}
      <path d="M 296 132 C 298 120 310 120 312 132 C 308 140 298 140 296 132 Z" stroke="#C0A085" strokeWidth="1" fill="url(#nailGradient)" />
      {/* Little Nail */}
      <path d="M 354 204 C 356 194 366 194 364 204 C 360 210 354 210 354 204 Z" stroke="#C0A085" strokeWidth="1" fill="url(#nailGradient)" />

      {/* Realistic Wrist Contours */}
      <path d="M 185 590 Q 252 612 325 590" stroke="#C4A488" strokeWidth="1.8" fill="none" opacity="0.6" />
      <path d="M 187 615 Q 252 638 323 615" stroke="#C4A488" strokeWidth="1.8" fill="none" opacity="0.6" />
    </g>
  );
}
