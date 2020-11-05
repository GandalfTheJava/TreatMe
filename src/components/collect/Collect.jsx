import React, { useEffect, useState } from 'react';
import './Collect.scss';
import Map from '../Map/Map';


const Collect = () => {
    const [lat, setLat] = useState(5);
    const [long, setLong] = useState(34);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // setLat(position.coords.latitude);
            // setLong(position.coords.longitude);
        });
    }, [long, lat]);
    return (
        <div className='container-map-outer' >
            <h1>Where art thou?</h1>
            <div className='container-map'>
                {
                    (lat && long) ? <Map lat={5} long={34} /> : <h1> Map loading..</h1>
                }
            </div>
        </div >
    )
};

export default Collect;