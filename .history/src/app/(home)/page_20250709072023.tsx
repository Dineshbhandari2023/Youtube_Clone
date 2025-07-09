// import { trpc } from "@/trpc/client";

import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  // const { data } = trpc.hello.useQuery({ text: "Dinesh Bhandari" });
  // const data = await trpc.hello({ text: "Namaste! Dinesh Bhandari" });
  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <Suspense fallback={<p>loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <div>
            <h1>I will load videos here in future!</h1>
          </div>
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
