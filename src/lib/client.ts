import { treaty } from "@elysiajs/eden/";
import type { App } from "@/server/app";

export const client = treaty<App>("http://localhost:3000").api;

const res = client.user.get();
