import "./App.css";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./data/theme";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Container } from "./AppElements";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleIsSidebarOpen = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleIsSidebarOpen={toggleIsSidebarOpen}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleIsSidebarOpen={toggleIsSidebarOpen}
        />
        <Container>
          <Home />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
