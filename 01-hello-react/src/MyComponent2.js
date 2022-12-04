//react 기본 패키지 참조 (필수)
import React from "react";

import MySubComponet from './MySubComponet'

const MyComponent2 = () => {
    return (
    <div>
        <h2>에베베베베</h2>
        <p>반갑습니다.</p>

        <MySubComponet />
        <MySubComponet />
        <MySubComponet />

    </div>);
}

export default MyComponent2;