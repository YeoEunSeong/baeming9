import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import categoryFilterItemsData from "../../../Services/actions/itemsAction";

const Items = (props) => {
  const { ItemsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(categoryFilterItemsData(category));
  }, [category]);

  return (
    <section>
      <span> 총 {ItemsReducer.length} 개</span>
      <Item />
    </section>
  );
};

export default Items;
