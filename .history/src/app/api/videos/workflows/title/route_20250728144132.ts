// http://localhost:3000/api/videos/workflows/title
import { db } from "@/db";
import { videos } from "@/db/schema";
import { serve } from "@upstash/workflow/nextjs";
import { and, eq } from "drizzle-orm";

interface InputType {
  userId: string;
  videoId: string;
}

export const { POST } = serve(async (context) => {
  const input = context.requestPayload as InputType;
  const { videoId, userId } = input;

  //   const video = context.run("get-video", async () => {
  //     const [existingVideo] = await db
  //       .select()
  //       .from(videos)
  //       .where(and(eq(videos.id, videoId), eq(videos.userId, userId)));
  //     if (!existingVideo) {
  //       throw new Error("Video not found");
  //     }

  //     return existingVideo;
  //   });
  await context.run("update-video", async () => {
    await db
      .update(videos)
      .set({
        title: "Updated From Background Job",
      })
      .where(and(eq(videos.id, videoId), eq(videos.userId, userId)));
  });
});
