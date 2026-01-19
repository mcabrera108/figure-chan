import { describe, it, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../../components/layout/Header";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../../store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "../../../features/ui/provider";

describe("Header Component", () => {
  beforeEach(() => {
    render(
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Provider>
            <Header />
          </Provider>
        </BrowserRouter>
      </ReduxProvider>
    );
  });
  it("Renders proper text in Header", () => {
    expect(screen.getByText("Figure-Chan")).toBeInTheDocument();
  });
  it("Renders login/register button in Header", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton);
    fireEvent.click(loginButton);
    const registerButton = screen.getByRole("button", { name: "Register" });
    expect(registerButton);
    fireEvent.click(registerButton);
  });
});
