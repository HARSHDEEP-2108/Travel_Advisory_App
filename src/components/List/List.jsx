import React from 'react'
import { Typography, Grid , CircularProgress, InputLabel,MenuItem ,FormControl, Select } from '@material-ui/core'
import PlaceDetails from '../placeDetaild/PlaceDetails'
import useStyles from "./styles"
import { useState } from 'react'


const List = ({places}) => {

  // const places=[{name:"Place1",latitide:"0",longitude:"0"},{name:"Place2",latitide:"0",longitude:"0"}]
  const classes=useStyles()
  const [type,settype]=useState("restaurants")
  const [rating,setrating]=useState(0)
  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants,Hotels and attractions around you</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>settype(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={rating} onChange={(e)=>setrating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.List}>
        {/* <div style={{overflowY:"scroll"}}> */}
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <PlaceDetails place_n={place}/>
          </Grid>
        ))}
        {/* </div> */}
      </Grid>
    </div>
  )
}

export default List