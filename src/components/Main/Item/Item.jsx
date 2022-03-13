import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Item = (props) => {
  const { ItemsReducer } = useSelector((state) => state);

  return (
    <ul>
      {ItemsReducer.map((item) => (
        <li key={item.id}>
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
