import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Componet", () => {
  test("renders Hello world", () => {
    //Arrange
    render(<Greeting />);

    // Act

    // Assert
    const hello = screen.getByText("Hello World");
    expect(hello).toBeInTheDocument();
  });

  test("renders good to see you if the button is not clicked", () => {
    render(<Greeting />);

    const output = screen.getByText("good to see you", { exact: false });
    expect(output).toBeInTheDocument();
  });

  test("rendres changed if the button was clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const output = screen.getByText("Changed!");
    expect(output).toBeInTheDocument();
  });

  test("does not renders good to see you if the button is clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const output = screen.queryByText("good to see you", { exact: false });
    expect(output).toBeNull();
  });
});
