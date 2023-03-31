import { render, screen } from "@testing-library/react";
import Navigation from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Navigation", () => {
  test("renders the homepage link", () => {
    render(<Navigation />);
    const homeLink = screen.getByLabelText("link to homepage");
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
