import { render, screen } from "@testing-library/react";
import CocktailsOverview from ".";
import "@testing-library/jest-dom/extend-expect";

test("renders a heading", () => {
  render(<CocktailsOverview />);
  const heading = screen.getByRole("heading", {
    name: /Get inspired with our most popular cocktails:/i,
  });
  expect(heading).toBeInTheDocument();
});
