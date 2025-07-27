import { Client } from "@upstash/workflow";

const qstashToken = process.env.QSTASH_TOKEN;

export const Workflow = new Client({ token: qstashToken });
