import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../components";
import "../index.css";

function setViewport(width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
}

afterEach(() => {
  setViewport(1024, 768);
});

describe("Navbar component", () => {
  test("toggles mobile menu", async () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Navbar />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: /toggle navigation/i });
    fireEvent.click(button);
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() =>
      expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument(),
    );
  });

  test("aria-expanded toggles on button click", () => {
    render(
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Navbar />
      </MemoryRouter>,
    );
    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation/i,
    });
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
  });

  test("menu closes on orientation change", async () => {
    render(
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Navbar />
      </MemoryRouter>,
    );
    const toggleButton = screen.getByRole("button", { name: /toggle navigation/i });
    fireEvent.click(toggleButton);
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    act(() => {
      window.dispatchEvent(new Event("orientationchange"));
    });
    await waitFor(() =>
      expect(
        screen.queryByRole("navigation", { name: /mobile navigation/i }),
      ).not.toBeInTheDocument(),
    );
  });

  test("includes landscape layout classes", () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Navbar />
      </MemoryRouter>,
    );
    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation/i,
    });
    expect(toggleButton).toHaveClass("landscape-toggle");
    const brand = screen.getByRole("link", { name: /keystone notary group, llc/i });
    expect(brand).toHaveClass("landscape-brand");
    const list = screen.getByRole("list");
    expect(list).toHaveClass("landscape-links");
  });


  test("menu stays open when rotating to landscape mobile", async () => {
    setViewport(375, 640);
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Navbar />
      </MemoryRouter>,
    );
    const toggleButton = screen.getByRole("button", { name: /toggle navigation/i });
    fireEvent.click(toggleButton);
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    act(() => {
      setViewport(812, 390);
      window.dispatchEvent(new Event("orientationchange"));
    });
    await waitFor(() =>
      expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument(),
    );
  });
});
