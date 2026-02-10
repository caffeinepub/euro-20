# Specification

## Summary
**Goal:** Add CEFR level support (A1–C2) to lessons for all supported languages and show a country flag for each language throughout the UI.

**Planned changes:**
- Add a CEFR level list (A1, A2, B1, B2, C1, C2) and update lesson content lookup to be keyed by (languageCode, levelId, sectionId).
- Update the seeded lesson dataset so every supported language has non-crashing content entries for every CEFR level and each existing section (alphabet, greetings, numbers, common, sentences).
- Add a CEFR level selector to the language learning page; switching levels updates the displayed content while keeping section navigation working.
- Add a static flag asset per supported language and extend the centralized language metadata to reference its flag asset.
- Display flags on the HomePage language grid and in the LanguageSwitcher (dropdown list and current selection display), using the centralized language metadata.

**User-visible outcome:** Users can choose a language and a CEFR level (A1–C2) to view lesson content by section, and they will see each language represented with its flag on the home grid and in the language switcher.
