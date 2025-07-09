import { categoriesRouter } from "@/modules/categories/server/procedures";
import { createTRPCRouter } from "../init";
import { auth } from "@clerk/nextjs/server";
// import { TRPCError } from "@trpc/server";
export const appRouter = createTRPCRouter({});
// export type definition of API
export type AppRouter = typeof appRouter;
