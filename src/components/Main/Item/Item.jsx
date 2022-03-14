import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Item = (props) => {
  const { ItemsReducer } = useSelector((state) => state);
  const { category } = useParams();

  return (
    <ul>
      {ItemsReducer.map((item) => (
        <li key={item.id} data-id={item.id}>
          <Link to={`/${category}/${item.id}`}>
            <img src={item.images[0]} alt={`${item.name} 이미지`} />
            <div>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Item;
