import { getHelloWorldResponse, getPostsResponse } from "@/lib/api";
// import React, { useState } from "react";
// import { useEffect } from "react";

export default async function page() {
  const data = await getPostsResponse();
  const helloWorld = await getHelloWorldResponse();
  // const [data, setData] = useState<
  //   | [
  //       {
  //         id: number;
  //         userId: number;
  //         title: string;
  //         body: string;
  //       }
  //     ]
  //   | null
  // >(null);

  // useEffect(() => {
  //   const fectData = async () => {
  //     const fetcheddata = await getApiResponse();
  //     console.log(fetcheddata);
  //     setData(fetcheddata);
  //   };

  //   fectData();
  // }, []);

  return (
    <div className=" grid grid-cols-4  gap-5">
      <h1>{helloWorld.message}</h1>
      {data
        ? data.map((ctx) => {
            return (
              <div key={ctx.id} className=" bg-gray-200 rounded-3xl p-5 ">
                <h1>title : {ctx.title}</h1>
                <p>body : {ctx.body}</p>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
}


