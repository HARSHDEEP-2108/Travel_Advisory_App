import React, { useState , useEffect } from 'react';
import './App.css';
import { getPlaces } from './api';
import {CssBaseline , Grid} from "@material-ui/core"
import Topbar from './components/Topbar/Topbar';
import  List  from './components/List/List'
import  Map  from './components/Map/Map'
import Map2 from './components/map2/Map2';
function App() {

  const [places,setPlaces] = useState({})
  const [coordinates,setCoordinates]= useState({})
  const [bounds,setbounds]=useState({})
  
  useEffect(() => {
    console.log("using navigate function")
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
        setCoordinates({lat:latitude,long:longitude})
    })

    console.log("coordinates set to :")
    console.log(coordinates)
  }, [])
  
  useEffect(() => {
   getPlaces(bounds).then((data)=>{
    console.log(data)
    setPlaces(data)
    // console.log(places)
   })
  }, [coordinates,bounds])
  
  return (
    <div className="App">
      <CssBaseline/>
      <Topbar/>
      <Grid conatainer spacing={3} style={{width:"100%"}}>
        <div style={{display:"flex"}}>
          <Grid item xs={12} md={4}>
              <List places={places}/>
          </Grid>
          <Grid item xs={12} md={8}>
              <Map2
               setCoordinates={setCoordinates}
               setbounds={setbounds}
               coordinates={coordinates}
               bounds={bounds}
               places={places}
              />
          </Grid>
        </div>
      </Grid>
      
    </div>
  );
}

export default App;
