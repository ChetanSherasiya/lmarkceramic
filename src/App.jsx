import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-next";
import AppRoutes from "./routes/AppRoutes";
import "./index.scss";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
