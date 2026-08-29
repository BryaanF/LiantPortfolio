/* Polyfills & global mocks for the jsdom test environment */
import "@testing-library/jest-dom";
import {vi} from "vitest";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = IntersectionObserverMock;
}

/* lottie-react requires APIs unavailable in jsdom — stub it globally */
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = cb => setTimeout(() => cb(Date.now()), 0);
}
