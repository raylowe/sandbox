import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//Pages
import Home from "./pages/home"
import About from "./pages/about"
import Users from "./pages/users"
import Modal from "./pages/modal"
import AccordionPage from "./pages/accordion";

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/modal">Modal</Link>
            </li>
            <li>
              <Link to="/accordion">Accordion</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/modal" element={<Modal/>} />
          <Route path="/accordion" element={<AccordionPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App