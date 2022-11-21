/**
 * 프로그램 시작점
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함.
 */
import React from 'react';

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom/client'; //패키지

import App from './App'; // 소스파일 

/**
 * 컴포넌트를 페이지에 랜더링한다.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
