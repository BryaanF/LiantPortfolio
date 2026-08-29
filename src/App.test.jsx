import {describe, it, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "./App";

vi.mock("lottie-react", () => ({
  default: ({animationData}) => (
    <div data-testid="lottie-stub" data-animation={Boolean(animationData)} />
  )
}));

describe("App", () => {
  it("renders the splash screen initially", () => {
    render(<App />);
    expect(screen.getByTestId("lottie-stub")).toBeInTheDocument();
  });

  it("exposes the main sections after the splash duration", async () => {
    render(<App />);
    expect(
      await screen.findByText(/Hello, I'm Liant/i, {}, {timeout: 4000})
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Professional Work Experience/i, {}, {timeout: 4000})
    ).toBeInTheDocument();
  });
});
