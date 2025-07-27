// http://localhost:3000/api/videos/workflows/title
import { serve } from "@upstash/workflow/nextjs";

interface InputType {
  userId: string;
  videoId: string;
}

export const { POST } = serve(async (context) => {
  await context.run("first-step", () => {
    const input = context.requestPayload as InputType;
    const { videoId, userId };
    console.log("first step ran");
  });

  await context.run("second-step", () => {
    console.log("second step ran");
  });
});
