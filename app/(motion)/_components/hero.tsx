"use client";
import { motion as m } from "motion/react";
import { Button } from "@/components/ui/button";
const MotionButton = m(Button);

export default function Hero() {
  return (
    <m.section
      transition={{
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }}
      className=" h-dvh bg-muted flex justify-center items-center flex-col gap-5 "
    >
      <m.div className=" overflow-hidden h-fit ">
        <m.h1
          variants={{
            initial: {
              y: -100,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          initial={"initial"}
          animate={"animate"}
          className=" text-4xl font-bold z-30"
        >
          Hero
        </m.h1>
      </m.div>
      <m.div className=" overflow-hidden h-fit ">
        <m.p
          variants={{
            initial: {
              y: -100,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          initial={"initial"}
          animate={"animate"}
          className=" text-lg text-muted-foreground z-20"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </m.p>
      </m.div>
      <m.div className=" overflow-hidden h-fit ">
        <MotionButton
          variants={{
            initial: {
              y: -100,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          initial={"initial"}
          animate={"animate"}
          className=" z-10"
        >
          Continue
        </MotionButton>
      </m.div>
    </m.section>
  );
}
