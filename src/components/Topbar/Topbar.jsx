import React from 'react'
import { Autocomplete } from "@react-google-maps/api"
import { AppBar,Toolbar,Typography,InputBase,Box } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import useStyles from "./styles"
import "./styles2.css"
const Topbar = () => {
    const classes =useStyles()
  return (
    
    <div>
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <div className={classes.box_m}>
                        <Typography variant='h6' className={classes.title}>
                            Explore More
                        </Typography>
                        {/* <Autocomplete> */}
                            <div className={classes.search} >
                               
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <div className={classes.inputmargin}>
                                <InputBase placeholder='Search...' className={{root:classes.inputRoot, input:classes.inputInput}}/>
                                </div>
                            </div>
                        {/* </Autocomplete> */}
                    </div>
                </Box>

            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Topbar