import { DEFAULT_LIMIT } from "@/constants";
import { StudioView } from "@/modules/studio/ui/view/studio-view";
import { HydrateClient, trpc } from "@/trpc/server";
import React from "react";

const page = async () => {
  void trpc.studio.getMany.prefetchInfinite({
    limit: DEFAULT_LIMIT,
    cursor: null,
  });

  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
};

export default page;
