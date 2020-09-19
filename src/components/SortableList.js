import React, { useState, useEffect } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const MAX_IMAGES = 15;
const images = Array.from(Array(MAX_IMAGES).keys()).map(
  (item) => {
    return "https://picsum.photos/200?" + item;
  }
);

const SortableList = props => {
  const itemsArray = Array.from(Array(images.length).keys());
  const [items, setItems] = useState(itemsArray);
  const itemRef = React.createRef();
  const [itemWidth, setItemWidth] = useState(null);

  useEffect(() => {
    if (itemRef.current) {
      return setItemWidth(itemRef.current.offsetWidth);
    }
  }, [itemRef]);

  const SortableItem = sortableElement(({ value }) => (
    <div
      className="container__item"
      style={{ height: itemWidth }}
      ref={itemRef}
    >
      <label>{value}</label>
      <img src={images[value]} alt={value} />
    </div>
  ));

  const SortableContainer = sortableContainer(({ children }) => {
    return (
      <div
        className="container"
        style={{ gridTemplateColumns: `repeat(${props.cols}, 1fr)` }}
      >
        {children}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <>
      <SortableContainer
        onSortEnd={onSortEnd}
        axis="xy"
        helperClass="SortableHelper"
      >
        {items.map((value, index) => {
          return (
            <SortableItem key={`item-${value}`} index={index} value={value} />
          );
        })}
      </SortableContainer>
      <div className="container__orderBox">Order: {items.join(",")}</div>
    </>
  );
};

export default SortableList;
