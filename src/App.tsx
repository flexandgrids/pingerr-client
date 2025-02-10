import { lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./@ui/layouts/AuthLayout";
const Home = lazy(() => import("./@ui/pages/Home"));
const Login = lazy(() => import("./@ui/pages/Login"));
const Signup = lazy(() => import("./@ui/pages/Signup"));

function Root() {
  return (
    <div className="overflow-y-auto flex bg-gray-100 h-screen">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/signup" element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}
export default function App() {
  return (
    <Router>
      {/* <Toaster
        position={"bottom-right"}
        toastOptions={{
          style: {
            padding: "1rem",
          },
        }}
      /> */}
      <Root />
    </Router>
  );
}
