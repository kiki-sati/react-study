import React from 'react';
import MyBox from '../components/MyBox';

const MyRef = () => {
    //HTML 태그를 react 안에서 참조할 수 있는 변수를 생성
    const myDname = React.useRef();
    const myLoc = React.useRef();
    const myResult = React.useRef();

    // 컴포넌트에 설정하기 위한 ref
    const myBoxRef = React.useRef();

    return (
        <div>
            <h2>MyRef</h2>

            <h3>ref 기본 사용 방법</h3>

            {/*미리 준비한 컴포넌트 참조변수와 HTML 태그 연결*/}
            <div>
                <label htmlFor="dname">학과명 : </label>
                <input type="text" ref={myDname} id="dname"/>
            </div>

            <div>
                <label htmlFor="loc">학과위치 : </label>
                <input type="text" ref={myLoc} id="loc"/>

            </div>


            <p>
                입력값 확인 : <span ref={myResult}></span>
            </p>

            <button onClick={e => {
                console.log(myDname);
                console.log(myLoc);

                const dname = myDname.current.value;
                const loc = myLoc.current.value;

                myResult.current.innerHTML = dname + "," + loc
            }}> 클릭 !</button>

            <hr/>

            <h3>컴포넌트에 ref 적용하기 </h3>

            <MyBox ref={myBoxRef}/>

            <button type="button" onClick={() => {
                myBoxRef.current.style.backgroundColor = '#f00';
            }}> RED</button>

            <button type="button" onClick={() => {
                myBoxRef.current.style.backgroundColor = 'blue';
            }}> BLUE</button>

        </div>
    );
};

export default MyRef;
