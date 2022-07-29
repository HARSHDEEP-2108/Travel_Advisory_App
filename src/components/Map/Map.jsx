import React from 'react'
import GoogleMapReact from "google-map-react"
import {Paper,Typography,useMediaQuery} from "@material-ui/core"
// import LocationOnOutlinedIcon from "@material-ui/icons/LoacationOnOutlined"
import Rating from "@material-ui/lab"
import {useJsApiLoader,GoogleMap} from "@react-google-maps/api"
import useStyles from "./styles"
const Map = () => {
  const classes=useStyles()
  const isMobile=useMediaQuery("(min-width:600px)")
  const {isLoaded}=useJsApiLoader({
    googleMapsApiKey:"AIzaSyCjtnRzGgEJtyS18whWccixPpf_kIUEWys"
  })

  if(!isLoaded){
    console.log("Loading")
  }

  if(isLoaded){
    console.log("LOaded succesgully")
  }
  const coordinates={lat:0,lng:0}
  const API_KEY="AIzaSyCjtnRzGgEJtyS18whWccixPpf_kIUEWys"
  return isLoaded?  (
    <div className={classes.mapContainer}>
      <GoogleMap
        center={coordinates} 
        zoom={14}
        mapContainerStyle={{width:"100%",height:"100%"}}
      >

      </GoogleMap>
    </div>
    // <div className={classes.mapContainer}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{key:API_KEY}}
    //     defaultCenter={coordinates}
    //     center={coordinates}
    //     defaultZoom={14}
    //     margin={[50,50,50,50]}
    //     options={''}
    //     onChange={''}
    //     onChildClick={''}
    //   >

    //   </GoogleMapReact>

    // </div>
  ):(<>
    <div>
      NAHI CHALYA
    </div>
  </>)
}

export default Map