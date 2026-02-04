import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./store/store";
import "./index.css";
import Router from "./Router";
import { Provider } from "./features/ui/provider";
import AuthContext from "./context/AuthContext";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthContext>
          <Provider>
            <Router />
          </Provider>
        </AuthContext>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
);
