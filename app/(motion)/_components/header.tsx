"use client";
import {
  headerVariants,
  hoverButtonVariants,
} from "@/app/(motion)/_animations/headerVariants";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion as m } from "motion/react";
import { useState } from "react";
import MenuBar from "./menuBar";

const MotionButton = m(Button);

export default function Header({ isOpen }: { isOpen: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
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
        className=" flex justify-between items-center flex-row bg-background w-full p-3 top-0 fixed z-70 "
      >
        <div>Acme Inc.</div>
        <div className=" flex gap-5 overflow-hidden">
          <MotionButton
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Hover Button
          </MotionButton>
          <AnimatePresence mode="wait">
            {isHover && (
              <m.div
                variants={hoverButtonVariants}
                initial="initial"
                animate="hover"
                className=" bg-black h-10 w-1/2 absolute top-13 right-0 z-60 overflow-hidden"
              >
                <div>Hover Button</div>
              </m.div>
            )}
          </AnimatePresence>
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</Button>
        </div>
      </m.header>

      <MenuBar isMenuOpen={isMenuOpen} />
    </>
  );
}
