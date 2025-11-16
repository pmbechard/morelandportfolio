import React from "react";
import SubNavbar from "../SubNavbar";
import Module1 from "../modules/Module1";
import Module2 from "../modules/Module2";
import Module3 from "../modules/Module3";
import Module4 from "../modules/Module4";
import Module5 from "../modules/Module5";
import Module6 from "../modules/Module6";

const Modules = () => {
  const [currentSubPage, setCurrentSubPage] =
    React.useState("Module 1 (ED 501)");
  return (
    <>
      <SubNavbar
        currentSubPage={currentSubPage}
        setCurrentSubPage={setCurrentSubPage}
      />
      <div id="content">
        {currentSubPage === "Module 1 (ED 501)" && <Module1 />}
        {currentSubPage === "Module 2 (ED 502)" && <Module2 />}
        {currentSubPage === "Module 3 (ED 503)" && <Module3 />}
        {currentSubPage === "Module 4 (ED 504)" && <Module4 />}
        {currentSubPage === "Module 5 (ED 505)" && <Module5 />}
        {currentSubPage === "Module 6 (ED 506)" && <Module6 />}
      </div>
    </>
  );
};

export default Modules;
