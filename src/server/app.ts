import { Elysia } from "elysia";

export const app = new Elysia({ prefix: "/api" }).get("/user", () => ({
  user: { name: "john" },
}));

export type App = typeof app;
