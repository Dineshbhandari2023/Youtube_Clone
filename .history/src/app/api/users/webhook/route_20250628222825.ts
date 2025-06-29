// import { Webhook } from "svix";
// import { WebhookEvent } from "@clerk/nextjs/server";
// import { headers } from "next/headers";
// import { db } from "@/db/index";
// import { users } from "@/db/schema";
// import { eq } from "drizzle-orm";
// import { id } from "date-fns/locale";

// export async function POST(req: Request) {
//   const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

//   if (!SIGNING_SECRET) {
//     throw new Error(
//       "Error: Please add signing secret to your environment variables from clerk Dashboard."
//     );
//   }

//   // create new svix instance with secret
//   const wh = new Webhook(SIGNING_SECRET);

//   // Get Headers
//   const headerPayload = await headers();
//   const svix_id = headerPayload.get("svix-id");
//   const svix_timestamp = headerPayload.get("svix-timestamp");
//   const svix_signature = headerPayload.get("svix-signature");

//   if (!svix_id || !svix_signature || !svix_timestamp) {
//     throw new Error("Error: Missing Svix request headers.");
//     status: 400;
//   }

//   // Get Body
//   const payload = await req.json();
//   const body = JSON.stringify(payload);

//   let evt: WebhookEvent;

//   // Verify payload with headers
//   try {
//     evt = wh.verify(body, {
//       "svix-id": svix_id,
//       "svix-timestamp": svix_timestamp,
//       "svix-signature": svix_signature,
//     }) as WebhookEvent;
//   } catch (err) {
//     console.error("Error: Could not verify webhook:", err);
//     return new Response("Error: Verification error", {
//       status: 400,
//     });
//   }

//   // Do something with payload
//   // For this guide, log payload to console
//   const eventType = evt.type;
//   console.log(
//     `Received webhook with event type of ${eventType} event with id: ${id}`
//   );
//   console.log("Webhook payload:", payload);

//   if (eventType === "user.created") {
//     // Create a new customer
//     const { data } = evt;
//     await db.insert(users).values({
//       clerkId: data.id,
//       name: `${data.first_name} ${data.last_name}`,
//       imageUrl: data.image_url,
//     });
//   }

//   if (eventType === "user.deleted") {
//     // Delete a customer
//     const { data } = evt;

//     if (!data.id) {
//       return new Response("Missing user Id:", { status: 400 });
//     }

//     await db.delete(users).where(eq(users.clerkId, data.id));
//   }

//   if (eventType === "user.updated") {
//     const { data } = evt;
//     // Update a customer
//     await db
//       .update(users)
//       .set({
//         name: `${data.first_name} ${data.last_name}`,
//         imageUrl: data.image_url,
//       })
//       .where(eq(users.clerkId, data.id));
//   }

//   return new Response("Webhook received", { status: 200 });
// }

import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
