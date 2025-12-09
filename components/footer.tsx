import { contacts, route, socialMedia } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="  flex  flex-col bg-black px-4 pt-5 pb-36">
      {/* logo */}
      <div className=" text-5xl text-blue-400 font-bold">Sipmate</div>

      <div className=" flex flex-col md:flex-row justify-between md:items-center mt-10 gap-10 md:gap-0">

        <div className=" flex flex-col md:flex-row justify-between md:items-center gap-10">

          {/* contact us */}
          <div className=" flex flex-col gap-2 items-start">
            <h1 className=" text-4xl border-b-2 border-white text-blue-400 pb-2 capitalize mb-5">
              {" "}
              contact us
            </h1>
            {contacts.map((ctx) => {
              return (
                <div className=" text-white flex flex-row gap-2" key={ctx.id}>
                  <span>{ctx.icon}</span>
                  <Link className=" text-white" href={ctx.value} key={ctx.id}>
                    {ctx.value}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* quick links */}
          <div className=" flex flex-col gap-2 items-start">
            <h1 className=" text-4xl border-b-2 border-white text-blue-400 pb-2 capitalize mb-5">
              {" "}
              Quick links
            </h1>
            {route.map((ctx) => {
              return (
                <Link
                  className=" text-white flex flex-col gap-2"
                  href={ctx.path}
                  key={ctx.id}
                >
                  {ctx.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* lets connecct */}
        <div className=" flex flex-col gap-5 w-1/2 justify-center items-start">
          <h1 className=" text-4xl border-b-2 border-white text-blue-400 pb-2 capitalize mb-5">
            {" "}
            Lets connect
          </h1>
          <div className=" relative">
            <input
              type="text"
              placeholder="Enter your email"
              className=" w-full p-2 rounded-2xl bg-white py-4"
            />
            <button className=" bg-blue-400 text-white px-4 py-2 rounded-2xl absolute top-2 right-2">
              Subscribe
            </button>
          </div>
          <div className=" flex flex-row gap-2">
            {socialMedia.map((ctx) => {
              return (
                <Link className=" text-white" href={ctx.url} key={ctx.id}>
                  {ctx.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}


