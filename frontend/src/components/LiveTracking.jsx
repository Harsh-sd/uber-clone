import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const LiveTracking = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API || '',
    });

    const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                setCurrentLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setTimeout(() => {
                    navigator.geolocation.getCurrentPosition(
                        (newPosition) => {
                            setCurrentLocation({
                                lat: newPosition.coords.latitude,
                                lng: newPosition.coords.longitude,
                            });
                        },
                        (error) => console.error('Error getting location:', error),
                        { enableHighAccuracy: true }
                    );
                }, 1000);
            },
            (error) => console.error('Error getting location:', error),
            { enableHighAccuracy: true }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            zoom={15}
            center={currentLocation}
            mapContainerStyle={{ width: '100%', height: '100%' }}
        >
            <Marker position={currentLocation} />
        </GoogleMap>
    );
};

export default LiveTracking;