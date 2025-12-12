import { getPostByIdResponse } from "@/lib/api";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const postByid = await getPostByIdResponse(Number(id));

  if (!postByid || Object.keys(postByid).length === 0) {
    return <p className=" text-red-500">Not found</p>;
  }

  return (
    <main className=" flex flex-col gap-5">
      <h1 className=" text-2xl font-bold">{postByid.title}</h1>
      <p className=" text-gray-500">{postByid.body}</p>
    </main>
  );
}
