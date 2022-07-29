
const axios = require("axios");
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
// const options = {
//   method: 'GET',

//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     'X-RapidAPI-Key': '5637e736b7msh84a32516a92b1cbp1e8505jsn40b54a7b0b0a',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

export const getPlaces = async (bounds) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      method: 'GET',

      params: {
        bl_latitude: bounds.bl_lat,
        tr_latitude: bounds.tr_lat,
        bl_longitude: bounds.bl_long,
        tr_longitude: bounds.tr_long,
      },
      headers: {
        // 'X-RapidAPI-Key': '5637e736b7msh84a32516a92b1cbp1e8505jsn40b54a7b0b0a',
        // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        'X-RapidAPI-Key': 'f7549c0847msh42203ddf02b9181p1035e9jsn8deb40c04c9d',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })


    return data
  } catch (error) {
    console.log(error)
  }
}