import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../../components/layout/Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("Renders proper text in Footer", () => {
    expect(screen.getByText("@2024-2026 Figure-Chan")).toBeInTheDocument();
  });
});
