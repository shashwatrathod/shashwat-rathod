import "./App.css";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./data/theme";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
