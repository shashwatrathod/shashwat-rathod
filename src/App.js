import "./App.css";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./data/theme";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleIsSidebarOpen = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar isSidebarOpen={isSidebarOpen} toggleIsSidebarOpen={toggleIsSidebarOpen}/>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleIsSidebarOpen={toggleIsSidebarOpen}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
