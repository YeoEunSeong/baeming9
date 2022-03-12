import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
import ItemDeatil from "../ItemDetail/ItemDeatil";

const Items = (props) => {
  const { selectItem } = useSelector((state) => state);

  return <section>{selectItem ? <ItemDeatil /> : <Item />}</section>;
};

export default Items;
