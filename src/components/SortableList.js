import React, { useState, useEffect } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const images = [
  "https://www.glimpse.tk/static/95fd14392d0565cfed09c210103c6d94/f836f/41-street2.jpg",
  "https://www.glimpse.tk/static/60b17207919ac18e54c3cbe1818799a6/f836f/01-street14.jpg",
  "https://www.glimpse.tk/static/230b2e4c18ac69b61ab6a758337bd9f0/f836f/21-R0020065-001.jpg",
  "https://www.glimpse.tk/static/a9e9c5133dbd94eff29bfe619b6e4275/f836f/17-DSC_3285.jpg",
  "https://www.glimpse.tk/static/10644fd335a87d112905248b9bcef94c/f836f/20-R0020080_merge-002.jpg",
  "https://www.glimpse.tk/static/2df3f2e412e606f019e949b40e29922c/f836f/03-street16.jpg",
  "https://www.glimpse.tk/static/a41f0c295eb6648d93c5c068b2b9f000/f836f/36-R0040068.jpg",
  "https://www.glimpse.tk/static/d903f742ee89711792589acb96184dae/f836f/26-R0020646.jpg",
  "https://www.glimpse.tk/static/67a4e9409b3ea2dd48708c6fc454507a/f836f/15-street6.jpg",
  "https://www.glimpse.tk/static/14b85ac1407f95eaba4a3fb545f8e29c/f836f/39-street9.jpg",
  "https://www.glimpse.tk/static/c8f628125d5f72190a23d46d0b797d91/f836f/58-street18.jpg"
];

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
