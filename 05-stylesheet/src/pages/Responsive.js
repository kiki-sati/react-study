import React from 'react';
import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoins';

/*반응형 웹 구현 기준 사이즈 정의*/
const sizes = {
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200
};

/*기준 사이즈를 활용하여 media query 생성*/
const mq = breakpoints(sizes);

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.bgcolor || '#eee'};
`

const Responsive = () => {
    return (
        <div>
            
        </div>
    );
};

export default Responsive;
