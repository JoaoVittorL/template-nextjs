import { fireEvent, render, screen, waitFor } from "@testing-library/react";
const { expect, describe, it } = require("@jest/globals");
import Home from "@/app/page";

describe("Home", () => {
  it("should render", () => {
    render(<Home />);
    expect(screen.getByText("teste")).toBeInTheDocument();
  });
});

