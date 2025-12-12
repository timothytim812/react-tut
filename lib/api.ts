async function getPostsResponse(): Promise<
  [
    {
      id: number;
      userId: number;
      title: string;
      body: string;
    }
  ]
> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  return data;
}

async function getPostByIdResponse(id: number): Promise<{
  id: number;
  userId: number;
  title: string;
  body: string;
}> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await response.json();
  return data;
}

async function getHelloWorldResponse() {
  const response = await fetch("http://localhost:3000/api/json");
  const data = await response.json();
  return data;
}

export { getPostsResponse, getPostByIdResponse, getHelloWorldResponse };
