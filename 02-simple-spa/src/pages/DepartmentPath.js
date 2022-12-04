import React from 'react';

// PATH 파라미터 추출 기능을 갖는 useParames() 함수를 react-route-dom 패키지로부터 참조함.
import { useParams } from 'react-router-dom';

function DepartmentPath() {
    //요청 데이터 확인하기
    const params = useParmas();
    console.group("useParams()의 리턴값 확인");
    console.debug(params);
    console.groupEnd();

    //필요한 변수값과 타입 확인
    console.debug('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
    console.debug('요청된 메세지 내용=%s (%s)', params.msg, typeof params.msg);
    console.groupEnd();

    const departmentList = {
        item: [
            {id: 201, dname: '전자공학과', loc: '3호관'},
            {id: 201, dname: '기계공학과', loc: '4호관'}
        ]
    }

    // 파라미터와 id가 일치하는 항목 찾기
    let departmentItem = departmentList.item.fidn((v, i) => v.id === parseInt(params.id));

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

export default DepartmentPath;