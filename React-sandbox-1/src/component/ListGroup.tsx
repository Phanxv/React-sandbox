import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}:ListGroupProps) {
  //State Hook : data that will change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //use className keyword instead of class
  return (
    //React can only return 1 element so we wrap it in Fragment
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* true && value will return value so if item.length === 0 then <p> will be rendered*/}
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
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
