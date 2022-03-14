import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchItemDetail from "../../../Services/actions/selectItemAction";

const ItemDeatil = (props) => {
  const { selectItemReducer } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchItemDetail(id)), []);

  return (
    <section>
      <div>
        <h3>{selectItemReducer?.name}</h3>
        <h4>{selectItemReducer?.price}</h4>
        <div>
          <img src={selectItemReducer?.images[0]} alt="상품 이미지" />
        </div>
        <div>
          <hr />
          <h4>배송정보</h4>
          <p>3,000원 (30,000원 이상 구매시 무료)</p>
          <hr />
          <div>
            <span>총 금액</span>
            <button>장바구니</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDeatil;
