import React from 'react'
import useStyles from "./styles"
import { Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab"

const PlaceDetails = ({ place_n }) => {
  const classes = useStyles()

  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={place_n.photo ? place_n.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place_n.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place_n.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1"> Price</Typography>
            <Typography gutterBottom variant="subtitle1">{place_n.price_level}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1"> Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">{place_n.ranking}</Typography>
          </Box>

          {place_n?.awards?.map((award) => {
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          })}

          {place_n?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className={classes.chip} />
          ))}

          {place_n.address && (
            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
              <LocationOnIcon />{place_n.address}
            </Typography>
          )}
          {place_n.phone && (
            <Typography variant="body2" color="textSecondary" className={classes.spacing}>
              <PhoneIcon /> {place_n.phone}
            </Typography>
          )}
        </CardContent>

        <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place_n.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place_n.website, '_blank')}>
          Website
        </Button>
      </CardActions>
      </Card>
    </div>
  )
}

export default PlaceDetails