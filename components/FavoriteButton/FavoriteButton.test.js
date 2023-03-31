import { render, screen } from "@testing-library/react";
import FavoriteButton from "./";
import "@testing-library/jest-dom/extend-expect";

describe("FavoriteButton", () => {
  test("renders the favorite button", () => {
    render(<FavoriteButton />);
    const favoriteButton = screen.getByLabelText("favorite-button");
    expect(favoriteButton).toBeInTheDocument();
  });
});
