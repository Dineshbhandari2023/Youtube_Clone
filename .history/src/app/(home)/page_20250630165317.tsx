"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: "Dinesh Bhandari" });

  return (
    <div>
      <p>I will load videos here in future!</p>
    </div>
  );
}
