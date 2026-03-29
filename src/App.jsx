import { BrowserRouter } from "react-router";
import AppRouter from "./Routes/router.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
