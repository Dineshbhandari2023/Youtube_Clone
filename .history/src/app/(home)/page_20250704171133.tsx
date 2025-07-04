// import { trpc } from "@/trpc/client";

import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";

export default async function Home() {
  // const { data } = trpc.hello.useQuery({ text: "Dinesh Bhandari" });
  // const data = await trpc.hello({ text: "Namaste! Dinesh Bhandari" });
  void trpc.hello.prefetch({ text: "Dinesh Bhandari" });

  return (
    <HydrateClient>
      <Suspense>
        <div>
          <h1>I will load videos here in future!</h1>
          <PageClient />
        </div>
      </Suspense>
    </HydrateClient>
  );
}
