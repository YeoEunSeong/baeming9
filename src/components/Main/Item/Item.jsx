import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import categoryFilterItemsData from "../../../Services/actions/itemsAction";

const Item = (props) => {
  const dispatch = useDispatch();
  const { ItemsReducer } = useSelector((state) => state);
  const param = useParams();

  useEffect(() => {
    dispatch(categoryFilterItemsData(param.id));
  }, [param.id]);

  const clickItem = (item) => {
    dispatch({ type: "CLICK_ITEM" });
  };

  return (
    <ul>
      {ItemsReducer.map((item) => (
        <li onClick={clickItem(item)}>
          <img
            src={
              "https://store.baemin.com/data/goods/21/11/45/363/363_detail_092.jpg"
            }
            alt={`${item.name} 이미지`}
          />
          <div>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Item;
