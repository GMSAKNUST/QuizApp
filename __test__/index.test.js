import { fireEvent, render, screen } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import { useRouter } from "next/router";
import { getPage } from "next-page-tester";
import App from "../pages/index";

test("Verify All element Present in the document", () => {
  render(<App />);
  const date = new Date();
  const year = date.getFullYear();
  expect(
    screen.getByRole("heading", { name: `MQI QURAN FAIR ${year}` })
  ).toBeInTheDocument();

  expect(screen.getByText("Start")).toBeInTheDocument();
  expect(screen.getByText("Start")).toHaveAttribute("href", "/contest");
  expect(screen.getByRole("img")).toHaveAttribute("alt", "mobileQuran");
});
