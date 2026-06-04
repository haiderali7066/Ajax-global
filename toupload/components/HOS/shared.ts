/* ─── FONT IMPORT ─── */
export const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
`;

/* ─── MOTION VARIANTS ─── */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.07 },
  }),
};

/* ─── AVATAR DATA ─── */
export const AVATARS = [
  { emoji: "👩🏽‍💼", color: "#FFD6B8", size: 52 },
  { emoji: "👨🏻‍💻", color: "#B8D4FF", size: 64 },
  { emoji: "👩🏾‍🎤", color: "#D4B8FF", size: 76 },
  { emoji: "👨🏽‍🔧", color: "#B8FFD4", size: 92 },
  { emoji: "👩🏼‍💻", color: "#FFB8D4", size: 112 },
  { emoji: "👨🏿‍💼", color: "#B8F0FF", size: 132 },
  { emoji: "👩🏻‍💼", color: "#FFE8B8", size: 112 },
  { emoji: "👨🏽‍💻", color: "#E8B8FF", size: 92 },
  { emoji: "👩🏾‍💼", color: "#B8FFE8", size: 76 },
  { emoji: "👨🏻‍🎨", color: "#FFB8B8", size: 64 },
  { emoji: "👩🏽‍💻", color: "#B8D4FF", size: 52 },
  { emoji: "👨🏾‍💼", color: "#D4FFB8", size: 44 },
];
