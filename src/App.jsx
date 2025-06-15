import React from "react";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />
      <img src="./bg.png" alt="Background" />
      <div className="wrapper" />
      
      <header>
        <img src="./hero-img.png" alt="Hero Banner" />
        <h1>
          Find <span className="text-gradient">Movies</span> That You'll Enjoy
        </h1>
      </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className="text-white">{searchTerm}</h1>
    </main>
  );
};

export default App;
