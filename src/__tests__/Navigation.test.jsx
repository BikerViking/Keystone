import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

function setup() {
  render(
    <MemoryRouter
      initialEntries={["/"]}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <App />
    </MemoryRouter>,
  );
}

beforeEach(() => {
  Object.defineProperty(navigator, "maxTouchPoints", {
    configurable: true,
    value: 1,
  });
});

test("navigates to about page", () => {
  setup();
  fireEvent.click(screen.getAllByRole("link", { name: /^about$/i })[0]);
  expect(
    screen.getByRole("heading", { name: /about us/i }),
  ).toBeInTheDocument();
});

test("swipe left from home navigates to about page", async () => {
  setup();
  const container = screen.getByTestId("swipe-container");
  fireEvent.touchStart(container, { touches: [{ clientX: 200, clientY: 0 }] });
  fireEvent.touchMove(container, { touches: [{ clientX: 50, clientY: 0 }] });
  fireEvent.touchEnd(container, {
    changedTouches: [{ clientX: 10, clientY: 0 }],
  });
  expect(
    await screen.findByRole("heading", { name: /about us/i }),
  ).toBeInTheDocument();
});

test("page indicator reflects current page and supports navigation", async () => {
  setup();
  const buttons = screen.getAllByRole("button", { name: /go to page/i });
  expect(buttons).toHaveLength(6);
  fireEvent.click(buttons[2]);
  expect(
    await screen.findByRole("heading", { name: /^services$/i }),
  ).toBeInTheDocument();
});

test("vertical scrolling does not trigger navigation", () => {
  setup();
  const container = screen.getByTestId("swipe-container");
  fireEvent.touchStart(container, { touches: [{ clientX: 100, clientY: 0 }] });
  fireEvent.touchMove(container, { touches: [{ clientX: 100, clientY: 50 }] });
  fireEvent.touchEnd(container, {
    changedTouches: [{ clientX: 100, clientY: 100 }],
  });
  expect(
    screen.queryByRole("heading", { name: /about us/i }),
  ).not.toBeInTheDocument();
});
