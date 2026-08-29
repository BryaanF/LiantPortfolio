import {describe, it, expect} from "vitest";
import {getTranslation} from "./translations";

describe("getTranslation", () => {
  it("returns plain strings unchanged", () => {
    expect(getTranslation("hello", "en")).toBe("hello");
    expect(getTranslation("hello", "id")).toBe("hello");
  });

  it("returns numbers unchanged", () => {
    expect(getTranslation(42, "id")).toBe(42);
  });

  it("resolves bilingual objects by language", () => {
    const value = {en: "Hello", id: "Halo"};
    expect(getTranslation(value, "en")).toBe("Hello");
    expect(getTranslation(value, "id")).toBe("Halo");
  });

  it("falls back to English for unknown languages", () => {
    expect(getTranslation({en: "Hello", id: "Halo"}, "jp")).toBe("Hello");
  });

  it("recurses into nested objects", () => {
    const value = {
      title: {en: "Step", id: "Langkah"},
      desc: {en: "Do it", id: "Kerjakan"}
    };
    const resolved = getTranslation(value, "id");
    expect(resolved).toEqual({title: "Langkah", desc: "Kerjakan"});
  });

  it("maps arrays recursively", () => {
    const value = [{en: "A", id: "B"}];
    expect(getTranslation(value, "en")).toEqual(["A"]);
  });
});
