import {Webhook} from "svix";
import {WebhookEvent} from "@clerk/nextjs/server";
import {headers} from "next/headers";

export async function POST(req:Request){
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!SIGNING_SECRET){
    throw new Error('Error: Please add signing secret to your environment variables from clerk Dashboard.');
  }

  // create new svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get Headers
  const headerPayload= await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_signature = headerPayload.get('svix-signature');
  const svix_timestamp = headerPayload.get('svix-timestamp');

  if (!svix_id || !svix_signature || !svix_timestamp){
    throw new Error('Error: Missing Svix request headers.');
    status:400;
  }


}