import React from 'react';
import MenuLink from "./components/MenuLink";
import {Route, Routes} from "react-router-dom";
import MyState from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyEffect from "./pages/MyEffect";
import MyRef from "./pages/MyRef";
import MyReducer from "./pages/MyReducer";
import DateRange2 from "./pages/DateRange2";
import MyMemo from "./pages/MyMemo";
import MyCallback from "./pages/MyCallback";
import MyWidth from "./pages/MyWidth";

const App = () => {
    return (
        <div>
            <h1>07-hook-event</h1>
            <nav>
                {/* 1) useState 관련 예제 */}
                <MenuLink to='mystate'>MyState</MenuLink>
                <MenuLink to='daterange1'>DateRange1</MenuLink>

                {/* 2) useEffect 관련 예제 */}
                <MenuLink to='myeffect'>MyEffect</MenuLink>

                {/* 3) useRef 관련 예제 */}
                <MenuLink to='myref'>MyRef</MenuLink>

                {/* 4) useReducer 관련 예제 */}
                <MenuLink to='myreducer'>MyReducer</MenuLink>
                <MenuLink to='daterange2'>DateRange2</MenuLink>

                {/* 5) useMemo 관련 예제 */}
                <MenuLink to='mymemo'>MyMemo</MenuLink>

                {/* 6) useCallback 관련 예제 */}
                <MenuLink to='mycallback'>MyCallback</MenuLink>

                {/* 7) 커스텀훅 관련 예제 */}
                <MenuLink to='mywidth'>MyWidth</MenuLink>
            </nav>

            <Routes>
                <Route path='/mystate' element={<MyState/>}></Route>

                <Route path='/daterange1' element={<DateRange1/>}></Route>
                <Route path='/myeffect' element={<MyEffect/>}></Route>
                <Route path='/myref' element={<MyRef/>}></Route>
                <Route path='/myreducer' element={<MyReducer/>}></Route>
                <Route path='/daterange2' element={<DateRange2/>}></Route>
                <Route path='/mymemo' element={<MyMemo/>}></Route>
                <Route path='/mycallback' element={<MyCallback/>}></Route>
                <Route path='/mywidth' element={<MyWidth/>}></Route>

            </Routes>
        </div>
    );
};

export default App;
