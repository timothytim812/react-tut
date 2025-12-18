"use client";
import { LinkVariants, menuVariants } from "@/app/(motion)/_animations/headerVariants";
import { route } from "@/lib/utils";
import { AnimatePresence, motion as m } from "motion/react";
import Link from "next/link";

export default function MenuBar({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <m.div
          className=" bg-black h-dvh w-1/2 absolute top-0 right-0 z-60 overflow-hidden"
          variants={menuVariants}
          initial={"hidden"}
          animate={isMenuOpen ? "enter" : "hidden"}
          exit={"exit"}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <m.div className=" flex size-full flex-col justify-center items-center gap-10 z-70">
            {route.map((ctx, i) => {
              return (
                <m.div
                  variants={LinkVariants}
                  custom={i}
                  initial={"initial"}
                  animate={isMenuOpen ? "animate" : "initial"}
                  key={ctx.id}
                  className=" flex items-center justify-center gap-2 text-black    bg-muted w-1/3"
                >
                  <span className=" bg-black w-1 h-1 rounded-full"></span>
                  <Link className="  text-2xl" href={ctx.path}>
                    {ctx.name}
                  </Link>
                </m.div>
              );
            })}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
