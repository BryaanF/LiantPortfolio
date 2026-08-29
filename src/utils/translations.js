/*
  Shared translation helper.
  Resolves bilingual objects { en, id } or returns plain strings/numbers unchanged.
  Used across all sections that read from src/data.
*/

export const getTranslation = (obj, lang) => {
  if (typeof obj === "string" || typeof obj === "number") return obj;
  if (Array.isArray(obj)) return obj.map(item => getTranslation(item, lang));
  if (obj && typeof obj === "object") {
    if ("en" in obj && "id" in obj) return obj[lang] || obj.en;
    const resolved = {};
    for (const key of Object.keys(obj)) {
      resolved[key] = getTranslation(obj[key], lang);
    }
    return resolved;
  }
  return obj;
};
