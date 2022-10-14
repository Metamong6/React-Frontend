import React from 'react';
import { useState, useCallback } from 'react';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MyComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC_q30NvddniDFaqRz2_DyJFFV7Z54MbM8"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(callback = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(callback = (map) => {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >

        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        </GoogleMap>
    ) : <></>
}

export default MyComponent