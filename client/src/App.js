import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import darkTheme from "./themes/dark";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import Library from "./pages/Library";
import Register from "./pages/register";
import { useUser } from "./hooks";

function App() {
  const [user] = useUser();

  if (!user)
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Router>
      </ThemeProvider>
    );
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
