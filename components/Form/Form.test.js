import { render, screen } from "@testing-library/react";
import Form from ".";
import "@testing-library/jest-dom";

describe("Form", () => {
  test("renders a heading", () => {
    render(<Form />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
