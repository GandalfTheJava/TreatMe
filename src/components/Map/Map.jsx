import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            long: 1.1743,
            lat: 52.3555,
            zoom: 10
        };
    }
    componentDidMount() {
        new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.long, this.state.lat],
            zoom: this.state.zoom
        });
        console.log(this.props);
    }
    render() {
        return (
            <div ref={el => this.mapContainer = el} />
        );
    }
}

export default Map;