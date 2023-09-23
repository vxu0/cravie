import { useState } from "react";
// import { MouseEvent } from "react";

interface Props {
  items: string[]; // string array
  heading: string;
  onSelectItem: (item: string) => void;
}

// props (items, heading, onSelectItem) should be treated as immutable
function ListGroup({ items, heading, onSelectItem }: Props) {
  // State Hook: built in from react
  // use for data or state that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] // variable (selectedIndex)
  //   arr[1] // updater function

  // event handler
  //   const handleClick = (event: MouseEvent) => console.log(event); // type annotation in TS
  // in console: SyntheticBaseEvent: wrapper from React

  return (
    // need parentheses for multiple lines
    // a component cannot return more than one element
    // empty brackets = Fragment
    // curly braces to render items dynamically
    <>
      <h1>{heading}</h1>
      {/* if first condition is true, renders second;
      if first is false, all false and none rendered*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} // passing a reference, not a function;
            // function called during runtime
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// cmd palette tools: format document (prettier), wrap with abbreviation
