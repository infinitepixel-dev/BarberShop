import React from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import "../src/App.css"

function LocationFinder() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ProcessingInstruction.env.React_App_Google_API_KEY,
    });
  return (
    <>
    </>
  )
}

export default LocationFinder