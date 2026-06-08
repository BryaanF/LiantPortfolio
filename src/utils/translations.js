/*
  Shared translation helper.
  Resolves bilingual objects { en, id } or returns plain strings/numbers unchanged.
  Used across all containers that read from portfolio.jsx.
*/

export const getTranslation = (obj, lang) => {
    if (typeof obj === "string" || typeof obj === "number") return obj;
    if (Array.isArray(obj)) return obj.map(item => getTranslation(item, lang));
    if (obj && typeof obj === "object") {
        // If the object has .en and .id keys, resolve by language
        if ("en" in obj && "id" in obj) return obj[lang] || obj.en;
        // Nested objects (e.g., workflow steps) — recurse into values
        const resolved = {};
        for (const key of Object.keys(obj)) {
            resolved[key] = getTranslation(obj[key], lang);
        }
        return resolved;
    }
    return obj;
};