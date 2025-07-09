import { render, screen } from "@testing-library/react";
import { Credentials } from "../components";

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
}

describe("Credentials component", () => {
  test("displays NNA badge image with alt text", () => {
    render(<Credentials />);
    const badge = screen.getByAltText(
      /certified nna notary signing agent 2025 badge/i,
    );
    expect(badge).toBeInTheDocument();
  });

  test("badge uses expected attributes and classes", () => {
    render(<Credentials />);
    const badge = screen.getByAltText(
      /certified nna notary signing agent 2025 badge/i,
    );
    const className = badge.getAttribute("class");
    expect(className).toEqual(expect.stringContaining("relative"));
    expect(className).toEqual(expect.stringContaining("w-32"));
    expect(className).toEqual(expect.stringContaining("h-32"));
    expect(className).toEqual(expect.stringContaining("-my-8"));
    expect(className).toEqual(expect.stringContaining("drop-shadow-xl"));
    expect(badge.getAttribute("width")).toBeNull();
    expect(badge.getAttribute("height")).toBeNull();
  });

  const viewports = [320, 640, 1024, 1280];

  test.each(viewports)("renders correctly at %ipx viewport", (width) => {
    setViewport(width);
    render(<Credentials />);
    // Section should be accessible via its heading label
    const region = screen.getByRole("region", { name: /credentials/i });
    expect(region).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });
});
