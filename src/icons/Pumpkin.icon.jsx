import React from 'react';
import { GiPumpkinMask } from 'react-icons/gi';

const width = 50;
const height = 50;
const PumpkinIcon = () => {
    return (
        <>
            <GiPumpkinMask style={{ color: 'pink', width: `${width}px`, height: `${height}px` }} />
        </>
    )
}
export default PumpkinIcon;