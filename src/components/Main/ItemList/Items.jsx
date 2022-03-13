import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import ItemDeatil from "../ItemDetail/ItemDeatil";
import categoryFilterItemsData from "../../../Services/actions/itemsAction";

const Items = (props) => {
  const { selectItem, ItemsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  let param = useParams();

  useEffect(() => {
    dispatch(categoryFilterItemsData(param.id));
  }, [param.id]);

  return (
    <section>
      <span> 총 {ItemsReducer.length} 개</span>
      {selectItem ? (
        <ItemDeatil />
      ) : (
        <>
          <Item />
        </>
      )}
    </section>
  );
};

export default Items;
