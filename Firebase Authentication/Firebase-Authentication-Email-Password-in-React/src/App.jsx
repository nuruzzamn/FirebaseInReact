import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import { Login } from "./pages/Login";
import { Protected } from "./components/Protected";
import { Home } from "./pages/Home";
import RouterOutlet from "./components/RouterOutlet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterOutlet />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Protected />}>
              <Route path="/" index element={<Home />} />
            </Route>
          </Route>
        </Routes>

        {/* <Routes>
          <Route path="/" />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Protected />}>
            <Route path="/" index element={<Home />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
