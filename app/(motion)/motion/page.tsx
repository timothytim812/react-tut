"use client";
import { motion as m } from "motion/react";
import Header from "../_components/header";
import Hero from "../_components/hero";
import About from "../_components/about";

export default function page() {
  return (
    <m.main className=" relative overflow-hidden">
      <Header isOpen={true} />
      <Hero />
      <About />
    </m.main>
  );
}
