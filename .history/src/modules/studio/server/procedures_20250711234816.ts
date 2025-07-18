import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const studioRoute = createTRPCRouter({
  getMany: protectedProcedure.query(async () => {
    const data = await db.select().from(videos);
  }),
});
