import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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
    expect(
      screen.getByRole("button", { name: /close navigation/i }),
    ).toBeInTheDocument();
    // Mobile menu should render with a navigation region for accessibility
    expect(
      screen.getByRole("navigation", { name: /mobile navigation/i }),
    ).toBeInTheDocument();

    // Clicking outside the menu should close it
    fireEvent.click(
      screen.getByRole("button", { name: /close menu overlay/i })
    );
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /close navigation/i })
      ).not.toBeInTheDocument()
    );
  });

  test('aria-expanded toggles on button click', () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Navbar />
      </MemoryRouter>,
    );
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });
});
