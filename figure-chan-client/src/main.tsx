import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import Router from "./Router";
import { Provider } from "./features/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Provider>
        <Router />
      </Provider>
    </ReduxProvider>
  </StrictMode>
);
