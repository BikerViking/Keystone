import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../components";

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

  test("menu stays open on orientation change", () => {
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
    window.dispatchEvent(new Event("orientationchange"));
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
  });
});
