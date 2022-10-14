import Geocode from 'react-geocode'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
Geocode.setLanguage('en')
Geocode.setRegion('es')
Geocode.enableDebug()

const GooglePositionAPI = async (currentAddr) => {
  return Geocode.fromAddress(currentAddr)
    .then( response => {
      return response.results[0].geometry.location;
    })
    .catch(err => console.log(err))
}

export default GooglePositionAPI 