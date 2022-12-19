import React from 'react';
import styled from "styled-components";
import mq from '../MediaQuery';

/*페이지 상단 컴포넌트 스타일 정의*/
const HeaderContainer = styled.header`
  .jumbotron {
    padding: 80px;
    text-align: center;
    background-color: #ddd;
    font-weight: 700 ${mq.maxWidth('sm')`
    padding:10px;
    font-size:14px;
    `};
  }
`
const Header = () => (
    <HeaderContainer>
        <div className="jumbotron">
            <h1>My 웹사이트</h1>
            <p>React.js Layout Template</p>
        </div>
    </HeaderContainer>
);

export default Header;