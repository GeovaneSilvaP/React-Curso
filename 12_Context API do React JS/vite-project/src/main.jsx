import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Contato from "./routes/Contato.jsx";
import Home from "./routes/Home.jsx";
import Erro from "./routes/Erro.jsx";

//5 - contexto mais complexo
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

//2- criar provide
import { CounterContextProvider } from "./context/CounterContext.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>
);
