import { route } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <header className=" w-full flex flex-col justify-between  ">
      <div className="h-2 flex flex-row justify-between gap-10 md:gap-40">
        <div className=" bg-black h-full w-1/4"></div>
        <div className=" bg-black h-full w-1/4"></div>
        <div className=" bg-black h-full w-1/4"></div>
        <div className=" bg-black h-full w-1/4"></div>
      </div>
      <div className=" p-5 w-full flex justify-between border-b-2">
        <div>Tharsh Space</div>
        <div className=" flex justify-between gap-10 ">
          {route.map((ctx) => {
            return (
              <Link
                className="underline hover:no-underline"
                href={ctx.path}
                key={ctx.id}
              >
                {ctx.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
