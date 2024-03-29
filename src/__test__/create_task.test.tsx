import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import { TodoProvider } from "../Context/TodoContext";
import App from "../App";

test("adds a new task to the list", () => {
  render(
    <TodoProvider>
      <App />
    </TodoProvider>
  );

  const inputElement = screen.getByPlaceholderText(/what need to do/i);

  const addButton = screen.getByRole("button", { name: "" });

  fireEvent.change(inputElement, { target: { value: "testTodo" } });

  fireEvent.click(addButton);

  const newTaskElement = screen.getByText("testTodo");
  expect(newTaskElement).toBeInTheDocument();
});
