import React from "react";
import Login from "./components/Login";
import Search from "./components/Search";
import CommentBox from "./components/CommentBox";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔥 Deliberately Vulnerable React App 🔥</h2>
      <Login />
      <Search />
      <CommentBox />
    </div>
  );
}

export default App;
npm start
