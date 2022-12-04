import React from 'react';

// PATH 파라미터 추출 기능을 갖는 useParames() 함수를 react-route-dom 패키지로부터 참조함.
import { useLocation } from 'react-router-dom';

function DepartmentGet() {
    //요청 데이터 확인하기
    const location = useLocation();
    console.group("useLocation()의 리턴값 확인");
    console.debug(location);
    console.groupEnd();

    // QueryString을 객체 형태로 변환
    const {search} = location;
    const query = new URLSearchParams(search);
    console.group("QueryString 확인");
    console.log(query);
    console.groupEnd();

    //추출된 변수값과 데이터 타입 확인
    console.group("파라미터 처리 결과 확인")
    console.debug('요청된 학과번호 값=%s (%s)', query.id, typeof query.id);
    console.debug('요청된 메세지 내용=%s (%s)', query.msg, typeof query.msg);
    console.groupEnd();

    const departmentList = {
        item: [
            {id: 101, dname: '컴퓨터공학과', loc: '1호관'},
            {id: 102, dname: '멀티미디어학과', loc: '2호관'}
        ]
    }

    // 파라미터와 id가 일치하는 항목 찾기
    let departmentItem = departmentList.item.find((v, i) => v.id === parseInt(query.id));

    // 조회 결과가 없는 경우
    if (!departmentItem) {
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
    }

    //정상화면출력
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호 : {departmentItem.id}</li>
                <li>학과위치 : {departmentItem.loc}</li>
            </ul>
        </div>
    );
}

export default DepartmentGet;