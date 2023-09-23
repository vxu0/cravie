// import { useState } from "react";

import { Fragment } from "react";

interface Props {
  category: string;
  options: string[];
  //   onSelectItem: (item: string) => void;
}

function Radio({ category, options }: Props) {
  return (
    <>
      {options.length === 0 && <p>nothing here</p>}
      {options.map((option, index) => (
        <div className={"btn-group"}>
          <input
            key={option}
            type="radio"
            className={"btn-check" + category}
            name={"options-base-" + category}
            id={"option" + index}
            autoComplete="off"
          />
          <label className={"btn" + category} htmlFor={"option" + index}>
            {option}
          </label>
        </div>
      ))}
      <br />
    </>
  );
}

export default Radio;
