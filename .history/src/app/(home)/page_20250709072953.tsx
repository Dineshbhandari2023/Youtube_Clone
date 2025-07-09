// import { trpc } from "@/trpc/client";

import { HydrateClient, trpc } from "@/trpc/server";
export const dynamic = "force-dynamic";

interface pageProps {
  searchParams: Promise<{ categoryID?: string }>;
}

const Page = async ({ searchParams }: pageProps) => {
  const { catrgoryID } = await searchParams;
  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <HomeView />
    </HydrateClient>
  );
};

export default Page;
