import { treaty } from "@elysiajs/eden/treaty2";
import type { App } from "@/app/api/[[...slugs]]/route";

export const client = treaty<App>("http://localhost:3000").api;
