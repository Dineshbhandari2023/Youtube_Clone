import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { auth } from "@clerk/nextjs/server";
// import { TRPCError } from "@trpc/server";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      // throw new TRPCError({ code: "BAD_REQUEST" });
      // const { userId } = await auth();
      console.log({ fromContext: opts.ctx.clerkUserId });

      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
