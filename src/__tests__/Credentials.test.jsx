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
      /nna certified notary signing agent 2025 badge/i,
    );
    expect(badge).toBeInTheDocument();
  });

  test("badge uses expected attributes and classes", () => {
    render(<Credentials />);
    const badge = screen.getByAltText(
      /nna certified notary signing agent 2025 badge/i,
    );
    const className = badge.getAttribute("class");
    expect(className).toEqual(expect.stringContaining("block"));
    expect(className).toEqual(expect.stringContaining("ml-auto"));
    expect(className).toEqual(expect.stringContaining("mt-4"));
    expect(className).toEqual(expect.stringContaining("w-28"));
    expect(className).toEqual(expect.stringContaining("h-28"));
    expect(className).toEqual(expect.stringContaining("drop-shadow-xl"));
    expect(className).toEqual(expect.stringContaining("pointer-events-none"));
    expect(className).toEqual(expect.stringContaining("select-none"));
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
