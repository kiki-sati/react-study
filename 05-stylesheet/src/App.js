import React from 'react';

import { NavLink, Routes, Route} from "react-router-dom";

import './assets/css/menu.css';

import InlineCss from './pages/InlineCss';
import CssClass from './pages/CssClass';
import CssModule from './pages/CssModule';
import Scss from './pages/Scss';
import ScssModule from './pages/ScssModule';
import StyledComponent from './pages/StyledComponent';
import Responsive from './pages/Responsive';
import News from './pages/News';

import GlobalStyles from "./GlobalStyles";

function App() {
    const myStyle = {
        fontWeight: 'bold',
        color: '#b82514',
        textDecoration: 'none',
        marginRight: '10px'
    };

    return (
        <div>
            <GlobalStyles />
            {/*(1-2) 페이지 타이틀 구성 - Inline Css가 적용되었다*/}
            <h1 style={myStyle}>05-stylesheet</h1>

            {/*(2-4) 페이지들에 대한 링크 구성*/}
            <nav>
            {/* NavLink 구성
                - 기본 Link컴포넌트의 기능에 className, activeClassName 속성이 추가된 객체
                - className: 기본적으로 적용될 CSS 클래스 이름
                - 현재 브러우저가 위치하는 URL과 동일한 주소를 갖는 링크에게 active 클래스가 자동으로 적용된다.
                  active 클래스에 대한 style의 존재 유무와는 별개이다.
            */}
            <NavLink className='normalLink' to='/inline_css'>InlineCss</NavLink>
            <NavLink className='normalLink' to='/css_class'>CssClass</NavLink>
            <NavLink className='normalLink' to='/css_module'>cssModule</NavLink>
            <NavLink className='normalLink' to='/scss'>Scss</NavLink>
            <NavLink className='normalLink' to='/scss_module'>ScssModule</NavLink>
            <NavLink className='normalLink' to='/styled_component'>styledComponent</NavLink>
            <NavLink className='normalLink' to='/responsive'>Responsive</NavLink>
            <NavLink className='normalLink' to='/news'>News(Demo)</NavLink>
            </nav>
            <hr/>

            {/*(2-4) 라우터 구성*/}
            <Routes>
                <Route path='/inline_css' element={<InlineCss/>}/>
                <Route path='/css_class' element={<CssClass/>}/>
                <Route path='/css_module' element={<CssModule/>}/>
                <Route path='/scss' element={<Scss/>}/>
                <Route path='/scss_module' element={<ScssModule/>}/>
                <Route path='/styled_component' element={<StyledComponent/>}/>
                <Route path='/responsive' element={<Responsive/>}/>
                <Route path='/news' element={<News/>}/>
            </Routes>
        </div>
    );
}

export default App;