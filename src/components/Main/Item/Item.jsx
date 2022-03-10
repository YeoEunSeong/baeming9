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

  return (
    <>
      {ItemsReducer.map((item) => (
        <li>
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
    </>
  );
};

export default Item;
