"use client";
import { motion as m, useInView } from "motion/react";
import { useRef } from "react";
import { splitVariants } from "../_animations/aboutVariants";

const AboutPhrase =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";

const GridPhrases = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const isInView = useInView(h1Ref);

  return (
    <m.section
      ref={containerRef}
      className=" h-fit bg-muted flex  items-center flex-col gap-5  border-t-2 px-10 py-20  "
    >
      <m.h1
        ref={h1Ref}
        initial={"initial"}
        animate={isInView && "animate"}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" text-4xl font-bold z-30 about-title"
      >
        {AboutPhrase.split("").map((ctx, i) => {
          return (
            <m.span variants={splitVariants} custom={i} key={i}>
              {ctx}
            </m.span>
          );
        })}
      </m.h1>
      <div className=" grid grid-cols-4  gap-2 px-10 pt-20">
        {GridPhrases.map((ctx) => {
          return (
            <m.div
              key={ctx.id}
              className=" bg-muted-foreground text-white p-5 rounded flex flex-col gap-5"
            >
              <m.h2 className=" text-lg font-bold">{ctx.title}</m.h2>
              <m.p className=" text-sm ">{ctx.description}</m.p>
            </m.div>
          );
        })}
      </div>
    </m.section>
  );
}
