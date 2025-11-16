import React, { useState } from "react";

interface Props {
  currentSubPage: string;
  setCurrentSubPage: React.Dispatch<React.SetStateAction<string>>;
}

const SubNavbar = ({ currentSubPage, setCurrentSubPage }: Props) => {
  const [selected, setSelected] = useState(currentSubPage);

  const handleClick = (page: string) => {
    setSelected(page);
    setCurrentSubPage(page);
  };

  return (
    <>
      <ul id="sub-nav-items">
        <li
          className={selected == "Module 1 (ED 501)" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Module 1 (ED 501)
        </li>
        <li
          className={selected == "Module 2 (ED 502)" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Module 2 (ED 502)
        </li>
        <li
          className={selected == "Module 3 (ED 503)" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Module 3 (ED 503)
        </li>
        <li
          className={selected == "Module 4 (ED 504)" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Module 4 (ED 504)
        </li>
        <li
          className={selected == "Module 5 (ED 505)" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Module 5 (ED 505)
        </li>
        <li
          className={selected == "Module 6 (ED 506)" ? "selected" : ""}
          onClick={(e) => handleClick(e.currentTarget.textContent)}
        >
          Module 6 (ED 506)
        </li>
      </ul>
    </>
  );
};

export default SubNavbar;
