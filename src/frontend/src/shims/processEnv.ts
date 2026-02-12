/**
 * Browser-safe shim for process.env
 * Provides a global process object with env properties needed by the app
 */

// Define the process.env object with required properties
const processEnv = {
  II_URL: 'https://identity.ic0.app',
  NODE_ENV: 'production',
};

// Extend globalThis with process if it doesn't exist
if (typeof globalThis.process === 'undefined') {
  (globalThis as any).process = {
    env: processEnv,
  };
}

// Also ensure window.process exists for legacy code
if (typeof window !== 'undefined' && typeof (window as any).process === 'undefined') {
  (window as any).process = {
    env: processEnv,
  };
}

export {};
