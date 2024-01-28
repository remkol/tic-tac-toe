import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
   // proms immutable unchangeable in component

  //   destructure param1: variable, param2: update function
  const [selectedIdx, setSelectedIdx] = useState(-1); //Hook

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIdx === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIdx(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
