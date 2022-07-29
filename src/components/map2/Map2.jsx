
import React from 'react'
import { useMemo } from 'react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import { useState } from 'react'
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from "react-map-gl"
import useStyles from "./styles"
import Pin from './Pin';

const Map2 = ({ setCoordinates, setbounds, coordinates, bounds, places }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const pins = useMemo(
    () =>
      places.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={place.longitude}
          latitude={place.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );
  console.log("pins")
  console.log(pins)

  const classes = useStyles()
  const isDesktop = useMediaQuery("(min-width:600px)")
  const [viewState, setViewState] = React.useState({
    longitude: 76.768066,
    latitude: 30.741482,
    zoom: 14
  });

  return (
    <div>
      <Map classNamee={classes.mapContainer}

        {...viewState}
        onMove={(evt) => {
          // console.log(evt)
          coordinates = { latitude: evt.viewState.latitude, longitude: evt.viewState.longitude }
          // console.log(coordinates)
          setCoordinates(coordinates)
          setbounds({ bl_lat: JSON.stringify(coordinates.latitude - 0.02), bl_long: JSON.stringify(coordinates.longitude - 0.03), tr_lat: JSON.stringify(coordinates.latitude + 0.02), tr_long: JSON.stringify(coordinates.longitude + 0.03) })
          // console.log(bounds)
          setViewState(evt.viewState)
        }}

        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: "100vw", height: "100vh" }}
        // maxBounds={}
        mapboxAccessToken="pk.eyJ1IjoiaGFyc2hkZWVwLTIxMDgiLCJhIjoiY2w1am9qdWJsMDI0dTNvbnhsbjBtNzNqOSJ9.Efnqia760wTAxLi2d9gGRg"

      >
        {/* {places?.map((place,i)=>{
          <div className={classes.markerContainer} 
          latitude={Number(place.latitude)}
          longitude={Number(place.longitude)}
          key={i}
          >
              !isDesktop ? (<LocationOnOutlinedIcon color="primary" fontSize="large" />):(
                <Paper elevation={3} className={classes.paper} >
                  <Typography className={classes.Typography} variant="subtitle2" gutterBottom>{place.name}</Typography>
                  <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                   alt={place.name}
                  />
                  </Paper>
              )
          </div>
        })} */}

        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        
        {pins}
        {/* {pins}


        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
           <Typography variant="subtitle2">{popupInfo.name}</Typography>
            <img className={classes.pointer} width="100%" src={popupInfo.photo ? popupInfo.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} />
          </Popup>
        )} */}

      </Map>
    </div>
  )
}

export default Map2