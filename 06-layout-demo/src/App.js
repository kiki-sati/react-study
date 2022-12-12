import React from 'react';
//라우팅처리
import { Routes, Route} from "react-router-dom";
//공통 컴포넌트
import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

//페이지 -> import 대상 경로가 폴더 명일 경우 해당 폴더의 index.js를 가져온다.
import Main from './pages/Main';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' exact={true} element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
