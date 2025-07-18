// import { z } from "zod";
// import { db } from "@/db";
// import { videos } from "@/db/schema";
// import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
// import { eq, and, or, lt, desc } from "drizzle-orm";

// export const studioRouter = createTRPCRouter({
//   getMany: protectedProcedure
//     .input(
//       z.object({
//         cursor: z
//           .object({
//             id: z.string().uuid(),
//             updatedAt: z.date(),
//           })
//           .nullish(),
//         limit: z.number().min(1).max(100),
//         direction: z.enum(["asc", "desc"]).optional(),
//       })
//     )
//     .query(async ({ ctx, input }) => {
//       const { cursor, limit } = input;
//       const { id: userId } = ctx.user;
//       console.log(
//         "Executing studio.getMany with input:",
//         input,
//         "userId:",
//         ctx.user.id
//       );
//       const data = await db
//         .select()
//         .from(videos)
//         .where(
//           and(
//             eq(videos.userId, userId),
//             cursor
//               ? or(
//                   lt(videos.updatedAt, cursor.updatedAt),
//                   and(
//                     eq(videos.updatedAt, cursor.updatedAt),
//                     lt(videos.id, cursor.id)
//                   )
//                 )
//               : undefined
//           )
//         )
//         .orderBy(desc(videos.updatedAt), desc(videos.id))
//         // Add 1 to the limit to check if there is more data
//         .limit(limit + 1);

//       const hasMore = data.length > limit;
//       //   Remove the last item if there is more data
//       const items = hasMore ? data.slice(0, -1) : data;
//       //   Set the next cursor to the last item if there is more data\
//       const lastItem = items[items.length - 1];
//       const nextCursor = hasMore
//         ? {
//             id: lastItem.id,
//             updatedAt: lastItem.updatedAt,
//           }
//         : null;

//       return {
//         items,
//         nextCursor,
//       };
//     }),
// });

// Procedure.ts
import { z } from "zod";
import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq, and, or, lt, desc } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

export const studioRouter = createTRPCRouter({
  getMany: protectedProcedure
    .input(
      z.object({
        cursor: z
          .object({
            id: z.string().uuid(),
            updatedAt: z.date(),
          })
          .nullish(),
        limit: z.number().min(1).max(100),
      })
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit } = input;
      const { id: userId } = ctx.user;

      console.log("Executing studio.getMany with:", { userId, cursor, limit });

      try {
        const data = await db
          .select()
          .from(videos)
          .where(
            and(
              eq(videos.userId, userId),
              cursor
                ? or(
                    lt(videos.updatedAt, cursor.updatedAt),
                    and(
                      eq(videos.updatedAt, cursor.updatedAt),
                      lt(videos.id, cursor.id)
                    )
                  )
                : undefined
            )
          )
          .orderBy(desc(videos.updatedAt), desc(videos.id))
          .limit(limit + 1);

        const hasMore = data.length > limit;
        const items = hasMore ? data.slice(0, -1) : data;
        const lastItem = items[items.length - 1];
        const nextCursor = hasMore
          ? {
              id: lastItem.id,
              updatedAt: lastItem.updatedAt,
            }
          : null;

        return {
          items,
          nextCursor,
        };
      } catch (error) {
        console.error("Database query error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch videos",
          cause: error,
        });
      }
    }),
});
