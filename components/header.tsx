"use client";
import { Route, route } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  
  if(pathname === "/contact"){
    return null;
  }
  return (
    <header className=" text-white flex justify-between bg-blue-400 px-5 py-3 sticky top-0 z-100 w-full" id=""  >
      <div>Sipmate</div>
      <nav className=" flex gap-5 sm:gap-10 md:gap-36 text-[20px]  justify-between items-center">
        {route.map((ctx: Route) => {
          return (
            <Link
              href={ctx.path}
              className={`capitalize ${
                pathname === ctx.path ? "font-bold" : "opacity-80"
              }`}
              key={ctx.id}
            >
              {ctx.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export { Header };
