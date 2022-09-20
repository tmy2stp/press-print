import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = "sk.eyJ1IjoidG15MnN0cCIsImEiOiJjbDhhYnNxZ2kwZjVlM25teHU4ZmR3NHg5In0.ZBbao5P6apL64QDE2biBaQ#3/0.00/0.00";

class Map extends Component {
    constructor() {
        super()
        this.state = {
            viewport: {
                width: '100vw',
                height: '100vh',
                latitude: 40.78343,
                longitude: -73.96625,
                zoom: 11
            }
        }
        this.handleViewportChange = this.handleViewportChange.bind(this)
    }
    handleViewportChange(viewport) {
        this.setState(prevState => ({
            viewport: {...prevState.viewport, ...viewport}
        }))
    }
    render() {
        return (
            <ReactMapGL
            {...this.state.viewport}
            onViewportChange={viewport => this.setState({viewport})}
            mapboxApiAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            />
        )
    }
}

export default Map;