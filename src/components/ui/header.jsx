import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-24 bg-teal-600 flex flex-row items-center px-5">
      <Link to="/">
        <h1 className="text-white font-bold text-3xl">
          Rick and Morty Characters
        </h1>
      </Link>
    </header>
  );
};

export default Header;
