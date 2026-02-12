# Specification

## Summary
**Goal:** Fix the root causes of the current Internet Computer build/deployment failure, eliminate browser crashes from Node-style env var usage, and expose minimal in-app error messages for auth/actor/streak failures.

**Planned changes:**
- Identify and fix the specific build/deploy error so the project cleanly builds and deploys on the Internet Computer.
- Add a safe frontend shim/build configuration so references like `process.env.*` (including `process.env.II_URL`) do not crash in the browser, without modifying immutable hook files, while keeping Internet Identity login working.
- Add minimal UI-visible English error messaging for failed Internet Identity initialization/login, actor initialization, and streak mutation failures (not console-only), keeping the app usable after errors.

**User-visible outcome:** The app builds and deploys successfully; the frontend no longer crashes due to missing `process` in the browser; and users see clear English error messages in the UI when authentication, actor setup, or streak updates fail.
