/**
 * TypeScript global type declarations for process.env
 * Ensures type safety for environment variables used in the app
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      II_URL?: string;
      NODE_ENV?: string;
    }
  }

  var process: {
    env: NodeJS.ProcessEnv;
  };
}

export {};
