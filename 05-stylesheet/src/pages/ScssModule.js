

import React from "react";

/** scss 모듈 참조 -> 참조변수 이름을 지정한다. */
import myScssMod from '../assets/scss/style.module.scss';

const ScssModule = () => {
    return (
        <div>
            <h2>ScssModule</h2>
            <div className={myScssMod.myScss}>
                <div className={`${myScssMod.myScssBox} ${myScssMod.red}`} />
                <div className={`${myScssMod.myScssBox} ${myScssMod.green}`} />
                <div className={`${myScssMod.myScssBox} ${myScssMod.blue}`} />
                <div className={`${myScssMod.myScssBox} ${myScssMod.yellow}`} />
            </div>
        </div>
    );
};

export default ScssModule ;