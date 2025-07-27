// http://localhost:3000/api/videos/workflows/title
import { serve } from "@upstash/workflow/nextjs";

interface InputType {
  userID;
  string;
}

export const { POST } = serve(async (context) => {
  await context.run("first-step", () => {
    console.log("first step ran");
  });

  await context.run("second-step", () => {
    console.log("second step ran");
  });
});
