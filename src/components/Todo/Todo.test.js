import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo testleri", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayılan olarak verilen 3 nesne rendeer edilmeli", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  test("input ve button dokümanda bulunmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("inputa string girilip butona basılınca listeye eklenmeli", () => {
    // inputu doldur
    const name = "mustafa";
    userEvent.type(input, name);

    //buttona tıkla
    userEvent.click(button);

    // assertion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
