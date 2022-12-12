import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

const FooterContainer = styled.footer`
  padding: 20px;
  font-size: 20px;
  text-align: center;
  background: bisque;
  font-weight: 700;

  ${mq.maxWidth('sm')`
    padding: 10px;
    font-size: 14px;
  
  `}
`;

const Footer = () => {
    return (
        <FooterContainer>
            <h2>푸터임당</h2>
        </FooterContainer>
    );
};

export default Footer;
