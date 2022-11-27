import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import mapboxgl from "!mapbox-gl";
import "./Map.scss";
import 'mapbox-gl/dist/mapbox-gl.css';
import HostModal from "../HostModal/HostModal";

mapboxgl.accessToken = "pk.eyJ1IjoidG15MnN0cCIsImEiOiJjbDhhb2xtd28waXB1M3B0ZXF0N3RibDZxIn0.IpxY6mo4MjqxCQVLRnLJZg";
//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function Map(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.3952);
    const [lat, setLat] = useState(43.6459);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });
        props.printers.map((feature) => {
            const popup = new mapboxgl.Popup({ offset: 25 })
                .setHTML("Status:" + feature.properties.Status + "<br/>Description: " + feature.properties.Description + "<br/>Handle:" + feature.properties.Handle);

            const marker = new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(map.current);
            popup.on('open', (e) => {
                const modal = document.getElementById("modal__container");
                modal.classList.remove("closed");
            });
            popup.on('close', (e) => {
                const modal = document.getElementById("modal__container");
                modal.classList.add("closed");
            });
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
            <HostModal />
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}