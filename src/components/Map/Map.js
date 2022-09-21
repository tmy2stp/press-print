import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from "mapbox-gl";
import "./Map.scss";

mapboxgl.accessToken = "pk.eyJ1IjoidG15MnN0cCIsImEiOiJjbDhhb2xtd28waXB1M3B0ZXF0N3RibDZxIn0.IpxY6mo4MjqxCQVLRnLJZg";

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.3832);
    const [lat, setLat] = useState(43.6532);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}