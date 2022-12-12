import React from 'react';
import styled from "styled-components";
import FakeImg from "../../common/FakeImg";
import mq from "../../MediaQuery";

const PostContainer = styled.div`
  flex: 1;
`;

const PostItem = styled.section`
  flex: 0 1 auto;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;

  ${mq.maxWidth('sm')`
    flex: none;
    width: 100%
  `}
  
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
`;

const Post = () => {
    return (
        <PostContainer>
            {[0, 1, 2, 3].map((v, i) => {
                return (
                    <PostItem key={i}>
                        <h2>Title Heading</h2>
                        <h3>Title description, dec 7, 2017</h3>
                        <FakeImg height='200'>Image</FakeImg>
                        <p>Some text...</p>
                        <p>이제 소학교 별 벌써 파란 했던 하나 너무나 버리었습니다. 이런 패, 책상을 듯합니다. 것은 별 까닭이요, 차 이름을 있습니다.</p>
                        <br/>
                    </PostItem>
                )
            })}
        </PostContainer>
    );
};

export default Post;
