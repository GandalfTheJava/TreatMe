import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            long: this.props.long,
            lat: this.props.lat,
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
    }
    render() {
        return (
            <div ref={el => this.mapContainer = el} />
        );
    }
}

export default Map;