import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/assets/footerlogo.png" alt="" />
      </div>
      <div>
        <ul className="footer__board">
          <li>공지사항</li>
          <li>1:1문의</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>
        <dl className="footer__info">
          <dt>상호</dt>
          <dd>배밍방구</dd>
          <dt>출처</dt>
          <dd>배민문방구의 클론 홈페이지 입니다.</dd>
        </dl>
      </div>
    </footer>
  );
};

export default Footer;
