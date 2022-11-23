import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />
      {/* {링크 구성 부분}     */}
      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/main">[Main(subRoute)]</Link>
      </nav>

      <a href="/about">일반링크</a>
      {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
      <Routes>
        {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
        {/* 첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
        <Route path="/" element={<Home/>} exact={true}/>
        <Route path="/about" element={<About/>}/>
        {/* 서브라우팅 사용 */}
        <Route path="/main/*" element={<Main/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </div>
  )
};

export default App;