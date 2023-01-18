import React from "react";
import { IconContext } from "react-icons";
import { TiArrowLeftThick } from "react-icons/ti";

export function GoBack() {
  return (
    <div>
      <IconContext.Provider value={{ size: "50px", title: "Go Back" }}>
        <h3>
          <TiArrowLeftThick />
        </h3>
      </IconContext.Provider>
    </div>
  );
}
