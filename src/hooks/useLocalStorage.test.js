import {describe, it, expect, beforeEach} from "vitest";
import {renderHook, act} from "@testing-library/react";
import {useLocalStorage} from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("uses initial value when storage is empty", () => {
    const {result} = renderHook(() => useLocalStorage("dark", true));
    expect(result.current[0]).toBe(true);
  });

  it("reads existing values from localStorage", () => {
    window.localStorage.setItem("lang", JSON.stringify("id"));
    const {result} = renderHook(() => useLocalStorage("lang", "en"));
    expect(result.current[0]).toBe("id");
  });

  it("persists values to localStorage", () => {
    const {result} = renderHook(() => useLocalStorage("key", 1));
    act(() => result.current[1](2));
    expect(window.localStorage.getItem("key")).toBe("2");
  });

  it("falls back to the initial value on corrupted JSON", () => {
    window.localStorage.setItem("broken", "{not-json");
    const {result} = renderHook(() => useLocalStorage("broken", "fallback"));
    expect(result.current[0]).toBe("fallback");
  });
});
