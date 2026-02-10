# Specification

## Summary
**Goal:** Let users play voice pronunciation (text-to-speech) for each lesson item’s native text across all supported languages using the browser’s built-in Web Speech API.

**Planned changes:**
- Add a Play control next to each lesson item’s non-empty `native` text on the LanguageLearningPage; hide the control when `native` is empty.
- Implement in-browser TTS playback via `window.speechSynthesis`, with English error messaging when speech is unsupported or fails.
- Add a centralized mapping from the app’s 20 language codes (`frontend/src/lib/languages.ts`) to BCP-47 tags and set `utterance.lang` based on the currently selected language, with graceful fallback when no matching voice exists.
- Provide basic playback UX: cancel any current speech before starting a new one, and offer Stop (or Play toggles to Stop) to immediately cancel playback, preventing overlapping/queued utterances.

**User-visible outcome:** Users can press Play next to a lesson item to hear its native text spoken aloud in an appropriate language voice, and can stop playback; items without native text show no pronunciation control.
