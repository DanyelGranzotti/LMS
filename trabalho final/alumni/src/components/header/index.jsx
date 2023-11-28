import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-20 m-0 items-center">
      <div className="text-2xl font-bold">ALUMNI.</div>
      <div className="flex space-x-8 text-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Saiba mais</NavLink>
        <NavLink to="/register">Faça parte!</NavLink>
        <NavLink to="/statement">Depoimentos</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
