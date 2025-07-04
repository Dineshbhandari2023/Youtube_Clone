"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Dinesh Bhandari",
  });

  return (
    <div>
      <p>Page Client says: {data.greeting}</p>
    </div>
  );
};
