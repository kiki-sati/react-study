import React from 'react';

const MyMemo = () => {
    const [myNumber, setMyNumber] = React.useState(0);

    const myResult = React.useMemo(() => {
        return myNumber * 10000;
    }, [myNumber]);

    const onMyNumberChange = (e) => {
        const inputValue = e.currentTarget.value;
        const inputNumber = isNaN(inputValue) ? 0 : parseInt(inputValue);
        setMyNumber(inputNumber);
    }

    return (
        <div>
            <h2>MyMemo</h2>
            <p>
                <input type='text' value={myNumber} onChange={onMyNumberChange}/> * 10000 = {myResult}
            </p>
        </div>
    );
};

export default MyMemo;
