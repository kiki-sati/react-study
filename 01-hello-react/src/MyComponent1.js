//react 기본 패키지 참조 (필수)
import React from "react";

import MySubCompnent from './MySubComponet';

/**
 * 함수형 컴포넌트 정의
 * - 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적
 */
const MyComponent1 = () => {
    return (
    <div>
        <h2>안녕하세요 리액트</h2>
        <p>반갑습니다.</p>

        <MySubCompnent />
        <MySubCompnent />
        <MySubCompnent />
    </div>);
}

export default MyComponent1;