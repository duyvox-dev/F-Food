import React, { useEffect, useState } from 'react';
// import './Homepage.scss';
import { TimeOrder } from '../../util/data';
import { useSelector } from 'react-redux';

function BtnTime({ arriveTime, checkoutTime }) {

    const currentTimeMinus20 = new Date(Date.now() - 220000 * 60)
    const [isDisable, setIsDisable] = useState(false)
    console.log(currentTimeMinus20);

    const getIsValidDate = () => {
        const currentDate = `${currentTimeMinus20.getHours()}:${currentTimeMinus20.getMinutes()}:${currentTimeMinus20.getSeconds()}`
        return currentDate < arriveTime && currentDate < checkoutTime;
    }

    useEffect(() => {
        //    const 
    }, [])

    return (
        <>
            {getIsValidDate() ? <button style={{ backgroundColor: "orange" }}>{arriveTime} - {checkoutTime}</button> : <button disabled style={{ backgroundColor: "grey" }}>{arriveTime} - {checkoutTime}</button>}
        </>
    );
}

export default BtnTime;
