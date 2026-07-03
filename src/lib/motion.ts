import type { Variants } from "framer-motion";

export const easeExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeQuart: [number, number, number, number] = [0.76, 0, 0.24, 1];

/*
  Variants are kept as plain (serializable) objects so they can be passed from
  Server Components to Client Components. Sequencing/stagger is handled by
  `staggerContainer` via `staggerChildren`.
*/

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeExpo } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeExpo } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: easeExpo } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeExpo },
  },
};
