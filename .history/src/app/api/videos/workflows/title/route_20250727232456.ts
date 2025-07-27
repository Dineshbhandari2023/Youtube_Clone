// http://localhost:3000/api/videos/workflows/title
import { videos } from "@/db/schema";
import { serve } from "@upstash/workflow/nextjs";
import { and, eq } from "drizzle-orm";

interface InputType {
  userId: string;
  videoId: string;
}

export const { POST } = serve(async (context) => {
  await context.run("first-step", () => {
    const input = context.requestPayload as InputType;
    const { videoId, userId } = input;

    const existingVideo = context.run("get-video", async () => {
      const data = await db
        .select()
        .from(videos)
        .where(and(eq(videos.id, videoId), eq(videos.userId, userId)));
    });
    console.log("first step ran");
  });

  await context.run("second-step", () => {
    console.log("second step ran");
  });
});
