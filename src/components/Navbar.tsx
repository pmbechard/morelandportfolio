import React, { useState } from "react";

interface Props {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ currentPage, setCurrentPage }: Props) => {
  const [selected, setSelected] = useState(currentPage);

  const handleClick = (page: string) => {
    setSelected(page);
    setCurrentPage(page);
  };

  return (
    <>
      <ul id="nav-items">
        <li
          className={selected == "Home" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Home
        </li>
        <li
          className={selected == "Literacy" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Literacy
        </li>
        <li
          className={selected == "Modules" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Modules
        </li>
        <li
          className={selected == "Clincal Practice" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Clincal Practice
        </li>
        <li
          className={selected == "InTASC Standards" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          InTASC Standards
        </li>
      </ul>
    </>
  );
};

export default Navbar;
