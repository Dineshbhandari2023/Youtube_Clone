// import { trpc } from "@/trpc/client";

import { HydrateClient, trpc } from "@/trpc/server";
export const dynamic = "force-dynamic";

const Page = () => {
  // const { data } = trpc.hello.useQuery({ text: "Dinesh Bhandari" });
  // const data = await trpc.hello({ text: "Namaste! Dinesh Bhandari" });
  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <HomeView />
    </HydrateClient>
  );
};

export default Page;
