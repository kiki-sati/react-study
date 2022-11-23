/**
 * 프로그램 시작점
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함.
 */
import React from "react";

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from "react-dom/client"; //패키지

import App from "./App"; // 소스파일

/**
 * 컴포넌트를 페이지에 랜더링한다.
 * App.js에서 정의한 'App'이라는 이름의 컴포넌트를 HTML 태그처럼 사용한다.
 * <React.StrictMode>가 적용되어 있는 경우, 선언만 하곳 ㅏ용되지 않는 변수들에 대한 경보 메세지가 브라우저 콘솔에 표시된다.
 * 하지만 console.log()를 통한 출력문이 2중으로 표시된다는 단점이 있기 때문에 삭제하는 것을 권장한다.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
