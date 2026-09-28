export type MehendiType = 'minimal' | 'arabic' | 'rajasthani' | 'mandala' | 'floral';

export interface PathGroup {
  id: string;
  name: string;
  d: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  fill?: string;
}

export interface MehendiDesign {
  id: MehendiType;
  name: string;
  subtitle: string;
  iconName: string;
  totalDuration: number;
  groups: PathGroup[];
}

export const MEHNDI_DESIGNS: Record<MehendiType, MehendiDesign> = {
  minimal: {
    id: 'minimal',
    name: 'Minimal Mehendi',
    subtitle: 'Delicate single-stem rose, curved vine & fine dot accent',
    iconName: 'Feather',
    totalDuration: 2.8,
    groups: [
      {
        id: 'main-vine',
        name: 'Main Curved Vine',
        d: 'M 250 480 Q 235 410 248 350 Q 262 290 240 230 Q 225 190 220 150',
        strokeWidth: 2.8,
        duration: 0.9,
        delay: 0,
      },
      {
        id: 'rose-center',
        name: 'Central Palm Rose Bloom',
        d: 'M 248 350 C 238 338 228 355 248 365 C 268 355 258 338 248 350 M 248 340 C 220 325 220 375 248 375 C 276 375 276 325 248 340',
        strokeWidth: 2.5,
        duration: 0.8,
        delay: 0.9,
      },
      {
        id: 'leaves',
        name: 'Delicate Leaves & Tendrils',
        d: 'M 240 430 Q 220 420 225 400 Q 240 410 242 430 M 255 380 Q 275 370 270 350 Q 255 360 252 380 M 250 300 Q 270 290 265 270 Q 250 280 248 300',
        strokeWidth: 2.2,
        duration: 0.6,
        delay: 1.7,
      },
      {
        id: 'finger-ring',
        name: 'Index Finger Ring & Tip',
        d: 'M 210 180 Q 220 185 230 180 M 212 170 Q 220 175 228 170 M 215 140 Q 220 120 222 105',
        strokeWidth: 2.2,
        duration: 0.5,
        delay: 2.3,
      },
    ],
  },
  arabic: {
    id: 'arabic',
    name: 'Arabic Mehendi',
    subtitle: 'Flowing diagonal Arabic lotus scroll with bold negative space',
    iconName: 'Sparkles',
    totalDuration: 4.8,
    groups: [
      {
        id: 'diagonal-stem',
        name: 'Main Sweeping Diagonal Stem',
        d: 'M 310 580 Q 260 480 235 390 Q 210 300 242 220 Q 248 160 244 100',
        strokeWidth: 3.5,
        duration: 1.2,
        delay: 0,
      },
      {
        id: 'lower-palm-bloom',
        name: 'Lower Palm Lotus Bloom',
        d: 'M 260 480 C 220 450 210 510 260 510 C 310 510 300 450 260 480 M 260 460 C 200 430 190 530 260 530 C 330 530 320 430 260 460',
        strokeWidth: 2.8,
        duration: 1.2,
        delay: 1.2,
      },
      {
        id: 'mid-palm-flower',
        name: 'Upper Palm Paisley Bloom',
        d: 'M 235 390 C 195 370 195 420 235 410 M 235 390 C 205 340 265 340 235 390 M 235 390 C 275 370 275 420 235 410',
        strokeWidth: 2.8,
        duration: 1.1,
        delay: 2.4,
      },
      {
        id: 'finger-vines-leaves',
        name: 'Middle Finger Vine & Draped Ring Bands',
        d: 'M 242 220 Q 220 200 240 180 M 244 160 Q 250 130 245 100 M 230 140 H 260 M 232 125 H 258',
        strokeWidth: 2.5,
        duration: 1.3,
        delay: 3.5,
      },
    ],
  },
  rajasthani: {
    id: 'rajasthani',
    name: 'Rajasthani Mehendi',
    subtitle: 'Intricate court mandala, Mayur peacock, Marwar jaali & finger rings',
    iconName: 'Crown',
    totalDuration: 7.5,
    groups: [
      {
        id: 'wrist-cuff',
        name: 'Palace Royal Wrist Cuff & Arches',
        d: 'M 185 580 Q 252 605 325 580 M 185 595 Q 252 620 325 595 M 190 570 Q 252 540 315 570',
        strokeWidth: 3.2,
        duration: 1.2,
        delay: 0,
      },
      {
        id: 'center-mandala',
        name: 'Central Royal Court Mandala',
        d: 'M 250 380 A 45 45 0 1 0 250 379 M 250 380 A 65 65 0 1 0 250 379 M 250 380 A 85 85 0 1 0 250 379',
        strokeWidth: 2.8,
        duration: 1.6,
        delay: 1.2,
      },
      {
        id: 'jaali-mesh-fill',
        name: 'Marwar Jaali Lattice Mesh',
        d: 'M 210 420 L 290 340 M 210 340 L 290 420 M 205 380 L 295 380 M 250 335 L 250 425',
        strokeWidth: 1.8,
        duration: 1.6,
        delay: 2.8,
      },
      {
        id: 'mayur-paisley',
        name: 'Miniature Mayur Peacock Curves',
        d: 'M 250 295 C 220 270 230 230 250 230 C 270 230 280 270 250 295 M 250 230 Q 240 210 250 200',
        strokeWidth: 2.2,
        duration: 1.3,
        delay: 4.4,
      },
      {
        id: 'finger-bands',
        name: 'Detailed Finger Ring Caps & Mesh',
        d: 'M 130 260 H 155 M 130 245 H 155 M 175 195 H 202 M 175 180 H 202 M 234 140 H 262 M 234 125 H 262 M 294 170 H 318 M 294 155 H 318 M 346 230 H 368 M 346 215 H 368',
        strokeWidth: 2.5,
        duration: 1.8,
        delay: 5.7,
      },
    ],
  },
  mandala: {
    id: 'mandala',
    name: 'Mandala Mehendi',
    subtitle: 'Symmetrical 12-petal sun mandala radiating from central bindu',
    iconName: 'Compass',
    totalDuration: 5.5,
    groups: [
      {
        id: 'bindu-core',
        name: 'Central Bindu Core & Ring',
        d: 'M 250 380 A 15 15 0 1 0 250 379 M 250 380 A 35 35 0 1 0 250 379',
        strokeWidth: 3.2,
        duration: 1.0,
        delay: 0,
      },
      {
        id: 'inner-petals',
        name: '12 Concentric Lotus Petals',
        d: 'M 250 325 C 235 345 235 375 250 380 C 265 375 265 345 250 325 M 305 380 C 285 365 255 365 250 380 C 255 395 285 395 305 380 M 250 435 C 235 415 235 385 250 380 C 265 385 265 415 250 435 M 195 380 C 215 365 245 365 250 380 C 245 395 215 395 195 380',
        strokeWidth: 2.5,
        duration: 1.4,
        delay: 1.0,
      },
      {
        id: 'outer-chakra',
        name: 'Outer Sun Chakra Ring & Lace Scallops',
        d: 'M 250 380 A 80 80 0 1 0 250 379 M 250 380 A 95 95 0 1 0 250 379',
        strokeWidth: 2.2,
        duration: 1.3,
        delay: 2.4,
      },
      {
        id: 'wrist-band',
        name: 'Chevron Wrist Bracelet',
        d: 'M 185 560 Q 252 585 325 560 M 185 575 Q 252 600 325 575',
        strokeWidth: 2.8,
        duration: 0.9,
        delay: 3.7,
      },
      {
        id: 'finger-motifs',
        name: 'Matching Finger Sun Caps',
        d: 'M 188 190 A 12 12 0 1 0 188 189 M 248 135 A 14 14 0 1 0 248 134 M 304 165 A 12 12 0 1 0 304 164',
        strokeWidth: 2.2,
        duration: 0.9,
        delay: 4.6,
      },
    ],
  },
  floral: {
    id: 'floral',
    name: 'Floral Mehendi',
    subtitle: 'Blooming rose bouquet, curling leaf tendrils & draped chains',
    iconName: 'Flower2',
    totalDuration: 4.8,
    groups: [
      {
        id: 'main-rose-bloom',
        name: 'Central Palm Rose Bloom',
        d: 'M 250 380 C 225 355 225 405 250 405 C 275 405 275 355 250 380 M 250 350 C 205 320 205 440 250 440 C 295 440 295 320 250 350',
        strokeWidth: 3.0,
        duration: 1.2,
        delay: 0,
      },
      {
        id: 'upper-blossom',
        name: 'Upper Palm Rose Cluster',
        d: 'M 235 290 C 215 275 215 310 235 310 C 255 310 255 275 235 290 M 275 300 C 260 285 295 285 285 300',
        strokeWidth: 2.6,
        duration: 1.1,
        delay: 1.2,
      },
      {
        id: 'leaf-chains',
        name: 'Curling Leaf Vines & Drop Chains',
        d: 'M 250 440 Q 230 490 252 540 M 235 470 Q 205 460 215 435 M 265 490 Q 295 480 285 455',
        strokeWidth: 2.2,
        duration: 1.2,
        delay: 2.3,
      },
      {
        id: 'finger-garlands',
        name: 'Elegantly Draped Finger Garlands',
        d: 'M 235 275 Q 215 200 200 135 M 275 285 Q 260 180 248 105 M 285 300 Q 305 230 306 155',
        strokeWidth: 2.0,
        duration: 1.3,
        delay: 3.5,
      },
    ],
  },
};
