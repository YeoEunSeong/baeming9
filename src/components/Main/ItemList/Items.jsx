import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
const Items = (props) => {
  return (
    <section>
      <ul>
        <Item />
      </ul>
    </section>
  );
};

export default Items;
