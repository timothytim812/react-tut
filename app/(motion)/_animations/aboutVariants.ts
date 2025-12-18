import { Variants } from "motion";

const aboutVariants = {
  initial: { opacity: 0, y: "-100%" },
  animate: { opacity: 1, y: "0%" },
};

const splitVariants: Variants = {
  initial: (i: number) => ({
    opacity: 0,
    y: -10,
    transition: { duration: 0.01, ease: "easeInOut", delay: i * 0.01 },
  }),
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.01, ease: "easeInOut", delay: i * 0.01 },
  }),
};

export { aboutVariants, splitVariants };
