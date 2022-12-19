import React from 'react';
import styled from "styled-components";
import FakeImg from "../../common/FakeImg";
import mq from "../../MediaQuery";

// 왼쪽 사이드바 컴포넌트 스타일 정의
const SideContainer = styled.div`
  box-sizing: border-box;
  width: 360px;
  flex: none;
  border-right: 1px solid #d5d5d5;
  background-color: #eeeeee;
  padding: 20px;
  
  
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px auto;

  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 10px auto;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
  }

  ${mq.maxWidth('sm')`
    width: 100%
  `}
`;
const Side = () => {
    return (
        <SideContainer>
            <h2>About of me</h2>
            <h3>Photo of me:</h3>
            <FakeImg height='200'>Image</FakeImg>
            <p>길을 전인 설레는 인간에 칼이다. 위하여서 거친 것은 산야에 인생에 교향악이다. 가슴이 따뜻한 인생을 인간은 방황하였으며, 예가 찾아 때문이다. 못할 원대하고, 그들은 군영과 부패뿐이다.</p>
            <hr />
            <h2>More Text</h2>
            <p>별에도 하나에 노루, 거외다. 하나에 헤일 별들을 있습니다. 어머님, 책상을 쉬이 멀리 하나에 버리었습니다.</p>
            <FakeImg height='60'>Image</FakeImg>
            <br />
            <FakeImg height='60'>Image</FakeImg>
            <br />
            <FakeImg height='60'>Image</FakeImg>
        </SideContainer>
    );
};

export default Side;
