import React from 'react';
import './Collect.scss';
import Map from '../Map/Map';

const Collect = () => (
    <div className='container-map-outer'>
        <h1>Where art thou?</h1>
        <div className='container-map' id='map'>
            <Map />
        </div>
    </div>
);


export default Collect;