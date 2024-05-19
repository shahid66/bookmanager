import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import BookBoard from "./books/BookBoard";
import BookList from "./books/BookList";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center">
        <BookBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
