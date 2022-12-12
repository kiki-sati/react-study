import React from "react";

/**
 * 컴포넌트 코드 안에서 SCSS 문법을 적용핞 컴포넌트를 직접 정의
 * 패키지 설치가 필요함 ( yarn add styled-components )
 */
// 기능 사용 위한 참조
import styled, { css } from 'styled-components';

/** ul태그로 구성된 컴포넌트 정의 -> styled.태그이름``; */
const MyGridContainer = styled.ul`
  list-style: none;
  margin: 0;
  width: 1024px;
  border: 5px solid #cc0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/** li태그로 구성된 컴포넌트 정의 */
const MyGridItem = styled.li`
  /* width: calc(100% / 3); */
  /* 전달받은 변수값에 접근하여 넓이를 동적으로 설정 */
  /* JSX로부터 전달받은 변수들을 props라는 이름의 객체 형태로 주입받는 콜백함수를 정의.
     이 콜백함수에서 리턴하는 값이 이 위치에 적용.        
  */
  /* width: ${function(props){
    return props.width;
}}; */
  width: ${props => props.width};
  text-align: center;
`;

/** div태그로 구성된 컴포넌트 정의 */
const MyBox = styled.div`
  border: 3px dotted #000;
  background-color: #eee;
  height: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  cursor: pointer;
  transition: all .1s ease-in;
  /* color: navy; */
  color: ${props => props.color || 'skyblue' };
  &:hover{
    transform: scale(1.05, 1.05) rotate(-10deg);
    background-color: ${props => props.color || 'navy'};
    color: #fff;
  }
  /** props 조건절 처리 */
  ${props =>
    // if(props.number % 2 === 1){
    //   return css`
    //     font-weight: bold;
    //     font-style: italic;
    //     text-decoration: underline;
    //   `
    // }
    props.number % 2 === 1 && css`
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    `
}
`

const StyledComponents = () => {
    const myColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink']
    const myWidth = 100 / myColors.length + '%';

    return (
        <div>
            <h2>StyledComponents</h2>

            <h3>단순 태그처럼 사용</h3>
            <MyGridContainer>
                <MyGridItem width={'30%'}><MyBox>Item1</MyBox></MyGridItem>
                <MyGridItem width={'10%'}><MyBox>Item2</MyBox></MyGridItem>
                <MyGridItem width={'20%'}><MyBox>Item3</MyBox></MyGridItem>
                <MyGridItem width={'15%'}><MyBox>Item4</MyBox></MyGridItem>
                <MyGridItem width={'25%'}><MyBox>Item5</MyBox></MyGridItem>
            </MyGridContainer>

            <h3>배열 원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
                {myColors.map((v, i) => {
                    return (
                        <MyGridItem key={i} width={myWidth}>
                            <MyBox color={v} number={i}>
                                {v}
                            </MyBox>
                        </MyGridItem>
                    )
                })}
            </MyGridContainer>
        </div>
    );
};

export default StyledComponents ;