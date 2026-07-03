// ─── Shared animation variants for all About page components ─────────────────

export const ease = [0.22, 1, 0.36, 1] as const;

export const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
  @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes marqueeAbout { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
`;

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
  hidden: { opacity: 0, scale: 0.92 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};
