import React from "react";
import { ToolContextProvider } from "./contexts/ToolContext";
import "./index.css";
import Whiteboard from "./Whiteboard";

// import NewWhiteboard from "./pages/NewWhiteboard";

const Index = () => {
  return (
    <React.StrictMode>
      <Whiteboard />
    </React.StrictMode>
  );
};

export default Index;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
