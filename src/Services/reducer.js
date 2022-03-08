import React from "react";
import { combineReducers, createStore } from "redux";

// 로그인했는지 안했는지 check
let isLogin = false;
const checkLoginReducer = (state = isLogin, action) => {
  return state;
};

// 아이템 render 기능
let items = [];
// fire
const renderItems = (state = items, action) => {
  return state;
};

let currItem = [];
const renderCurrentItem = (state = currItem, action) => {
  return state;
};

const store = createStore(
  combineReducers({ checkLoginReducer, renderItems, renderCurrentItem })
);

export default store;
