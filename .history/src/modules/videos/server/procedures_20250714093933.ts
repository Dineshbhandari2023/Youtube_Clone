import { z } from "zod";
import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq, and, or, lt, desc } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

export const videosRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    throw new TRPCError({ code: "BAD_REQUEST" });

    const [video] = await db
      .insert(videos)
      .values({ userId, title: "Untitled" })
      .returning();
    return {
      video: video,
    };
  }),
});
