import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";

import { createTRPCRouter } from "../init";
import { videosRouter } from "@/modules/videos/server/procedures";

// import { TRPCError } from "@trpc/server";
export const appRouter = createTRPCRouter({
  videos: videosRouter,
  studio: studioRouter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
