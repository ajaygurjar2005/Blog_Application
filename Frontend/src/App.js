import DataProvider from "./context/DataProvider";
import "./App.css";
import Login from "./Component/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Component/home/Home";
import Header from "./Component/Header/Header";
import { useState } from "react";
import CreatePost from "./Component/create/CreatePost";
import Detailview from "./Component/details/detailview.jsx";
import Update from "./Component/create/Update.jsx";
import About from "./Component/about/About.jsx";
import Contact from "./Component/contact/Contact.jsx";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <div>
      <Header />
      <Outlet />
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login isUserAuthenticated={isUserAuthenticated} />}
          />

          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/" Component={Home} />
          </Route>

          <Route
            path="/create"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/create" Component={CreatePost} />
          </Route>

          <Route
            path="/details/:id"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/details/:id" Component={Detailview} />
          </Route>

          <Route
            path="/update/:id"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/update/:id" Component={Update} />
          </Route>

          <Route
            path="/about"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/about" Component={About} />
          </Route>

          <Route
            path="/contact"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/contact" Component={Contact} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
