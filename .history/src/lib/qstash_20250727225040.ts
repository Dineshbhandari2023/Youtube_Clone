import { Client } from "@upstash/workflow";

const qstashToken = process.env.QSTASH_TOKEN;

export const qstash = new Client({ token: qstashToken });
