"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: "Dinesh Bhandari" });

  return (
    <div>
      <h1>I will load videos here in future!</h1>
      <p>Client Component sasya: {data.greeting}</p>
    </div>
  );
}
