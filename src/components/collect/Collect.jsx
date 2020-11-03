import React, { useEffect } from 'react';
import './Collect.scss';
import Map from '../Map/Map';

let lat;
let long;
const Collect = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude
            long = position.coords.longitude
        });
    });
    return (
        <div className='container-map-outer' >
            <h1>Where art thou?</h1>
            <div className='container-map' id='map'>
                <Map lat={lat} long={long} />
            </div>
        </div >
    )
};

export default Collect;