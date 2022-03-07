import React from "react";
import { combineReducer, createStore } from "redux";

// 로그인했는지 안했는지 check
let isLogin = false;
const checkLoginReducer = (state = isLogin, action) => {};

// 아이템 render 기능
let items = [];
// fire
const renderItems = (state = items, action) => {};

let currItem = [];
const renderCurrentItem = (state = currItem, action) => {};

const store = createStore(
  combineReducer({ checkLoginReducer, renderItems, renderCurrentItem })
);

export default store;
