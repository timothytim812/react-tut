import { Variants } from "motion";

const headerVariants = {
  hidden: {
    y: "-200%",
  },
  enter: {
    y: 0,
  },
};

const menuVariants = {
  hidden: {
    x: "100%",
  },
  enter: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};

const LinkVariants: Variants = {
  initial: (i: number) => ({
    x: "100%",
    opacity: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: i * 0.1,
    },
  }),
  animate: (i: number) => {
    return {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: i * 0.1,
      },
    };
  },
};

const hoverButtonVariants = {
  initial: {
    scale: 0,
  },
  hover: {
    scale: 1,
  },
};

export { headerVariants, menuVariants, LinkVariants, hoverButtonVariants };
