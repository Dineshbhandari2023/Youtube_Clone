import { Client } from "@upstash/workflow";

const qstashToken = process.env.QSTASH_TOKEN;

export const workflow = new Client({ token: "process.e" });
