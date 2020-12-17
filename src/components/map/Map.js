import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ21vYXdhZCIsImEiOiJja2lzcjRmamQwbmJoMnBzY2oycnpldzRuIn0.OWucPatEQEoNmhwRmqFXqg';

const Map = () => {
  const mapContainerRef = useRef(null);
  
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(15.5);

  navigator.geolocation.getCurrentPosition(function(position) {
    // Get the location coordinates
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat + "   " + lng);

    // Works, but needs to be inserted in the map below
  });

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.101800, 52.073210],
      zoom: zoom
    });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
      {/* mocked own location - should be on the map too */}
      <img className="you-walking"
           src={window.location.origin + "/assets/youWalking.png"}
          alt="you Walking" />
      <img className="jeroen-walking"
           src={window.location.origin + "/assets/jeroenWalking.gif"}
          alt="Jeroen Walking" />
    </div>
  );
};

export default Map;
