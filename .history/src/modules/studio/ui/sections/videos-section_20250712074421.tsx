"use client";

import { trpc } from "@/trpc/client";

export const VideosSection = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery({
    limit: 5,
  });
  return <div>Videos Section</div>;
};
