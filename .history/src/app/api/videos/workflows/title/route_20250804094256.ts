// http://localhost:3000/api/videos/workflows/title
import { db } from "@/db";
import { videos } from "@/db/schema";
import { serve } from "@upstash/workflow/nextjs";
import { and, eq } from "drizzle-orm";

interface InputType {
  userId: string;
  videoId: string;
}

const TITLE_SYSTEM_PROMPT = `Your task is to generate an SEO-focused title for a YouTube video
based on its transcript. Please follow these guidelines:
- Be concise but descriptive, using relevant keywords to improve discoverabilility.
- Highlight the most complelling or unique aspect of the video content.
- Avoid jargon or overly complex language unless it directly supports searchability.
- Use action-oriented phrasing or clear value propositions where applicable.
- Ensure the title is 3-8 words long and no more that 100 characters.
- ONLY return the title as plain text. Do not add quotes or any additional formatting.`;

export const { POST } = serve(async (context) => {
  const input = context.requestPayload as InputType;
  const { videoId, userId } = input;

  const video = await context.run("get-video", async () => {
    const [existingVideo] = await db
      .select()
      .from(videos)
      .where(and(eq(videos.id, videoId), eq(videos.userId, userId)));
    if (!existingVideo) {
      throw new Error("Video not found");
    }

    return existingVideo;
  });

  const generatedTitle = await context.api.openai.call("generate-title", {
    token: process.env.OPENAI_API_KEY!,
    operation: "chat.completions.create",
    body: {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: TITLE_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content:
            "Hi everyone, in this tutorial we will be building a YouTube clone",
        },
      ],
    },
  });

  // get text:
  console.log(body.content[0].text);

  await context.run("update-video", async () => {
    await db
      .update(videos)
      .set({
        title: "Updated From Background Job",
      })
      .where(and(eq(videos.id, video.id), eq(videos.userId, video.userId)));
  });
});
