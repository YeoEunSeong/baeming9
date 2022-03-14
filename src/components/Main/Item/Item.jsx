import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import selectIem from "../../../Services/actions/selectItem";

const Item = (props) => {
  const { ItemsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const clickItemEvent = (e) => {
    let target = e.target;
    while (true) {
      if (target.tagName === "LI") break;
      target = target.parentNode;
    }
    const dataItem = target.dataset.id;
    dispatch(selectIem(dataItem));
  };

  return (
    <ul>
      {ItemsReducer.map((item) => (
        <li key={item.id} data-id={item.id} onClick={(e) => clickItemEvent(e)}>
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
