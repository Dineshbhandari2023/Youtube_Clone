import { categoriesRouter } from "@/modules/categories/server/procedures";
import { createTRPCRouter } from "../init";
import { auth } from "@clerk/nextjs/server";
import { studioRouter } from "@/modules/studio/server/procedures";

// import { TRPCError } from "@trpc/server";
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
