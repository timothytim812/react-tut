"use client";
import { headerVariants, menuVariants } from "@/animations/headerVariants";
import { Button } from "@/components/ui/button";
import { route } from "@/lib/utils";
import { AnimatePresence, motion as m } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function Header({ isOpen }: { isOpen: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <m.header
        variants={headerVariants}
        initial={"hidden"}
        animate={isOpen ? "enter" : "hidden"}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className=" h-fit flex justify-between items-center flex-row bg-background w-full p-3 top-0 sticky z-70"
      >
        <div>Acme Inc.</div>
        <div>
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</Button>
        </div>
      </m.header>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <m.div
            className=" bg-black h-dvh w-1/2 absolute top-0 right-0 z-60"
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
                    variants={{
                      initial: {
                        x: "100%",
                        opacity: 0,
                      },
                      animate: {
                        x: "0%",
                        opacity: 1,
                      },
                    }}
                    initial={"initial"}
                    animate={isMenuOpen ? "animate" : "initial"}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
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
    </>
  );
}
