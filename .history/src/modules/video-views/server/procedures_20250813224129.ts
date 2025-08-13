import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { z } from "zod";

export const videoViewsRouter = createTRPCRouter({
  create: protectedProcedure.input(z.object({ videoId: z.string().uuid() })),
});
