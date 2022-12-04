// (1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수명시)
import React from "react";

import Hello from "./MyComponent1";
import World from "./MyComponent2";

/**
 * (2) App이라는 이름의 함수형 컴포넌트(재사용이 가능한 HTML 조각 단위)
 * 프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용이 브라우저에 나타남.
 * 반환되는 HTML 코드는 JSX 문법을 사용한다.
 * JSX -> XML과 비슷한 React 전용 Javascript 확장 문법
 */
function App() {
  return (
    <div>
      <h1>안녕 리액트</h1>
      {/* {(3-2) Hello와 World라는 이름의 컴포넌트 출력} */}
      <Hello></Hello>
      <World />
    </div>
  );
}

export default App;
