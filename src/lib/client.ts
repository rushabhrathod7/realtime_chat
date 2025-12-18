import { treaty } from "@elysiajs/eden/treaty2";
import type { App } from "@/app/api/[[...slugs]]/route";

// Dynamically determine API base URL
const getApiBase = () => {
  // In browser environment
  if (typeof window !== "undefined") {
    // Use current origin (handles both localhost and deployed)
    return window.location.origin;
  }
  // Server-side fallback
  return process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000";
};

export const client = treaty<App>(getApiBase()).api;
