declare module "@elysiajs/eden" {
  /**
   * Minimal ambient type for `treaty` used in this project.
   * It returns an object with an `api` property typed as the generic parameter.
   */
  export function treaty<T = any>(base: string): { api: T };

  export {};
}
