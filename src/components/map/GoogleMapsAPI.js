import { useRef, useState } from 'react'
import { Box, Button, ButtonGroup, Stack, Input, Skeleton, Typography, Select, TextField, MenuItem, FormControl, InputLabel } from "@mui/material"
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import GooglePostionAPI from './GooglePostionAPI'
import dayjs from 'dayjs'


const center = { lat: 40.7127744, lng: -74.006059 }
const now = dayjs()

const GoogleMapsAPI = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [fare, setFare] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  const [selected, setSelected] = useState('')  //인원수
  const [useTime, setUseTime] = useState('')          // 시간

  const handleSelect = (event) => {             // 인원수
    setSelected(event.target.value)
  }

  const handleTime = (event) => {               // 시간
    setUseTime(event.target.value)
  }

  if (!isLoaded) {
    return <Skeleton />
  }

  function calculate() {
    calculateRoute()
    calculatePosition()
    console.log(useTime, selected, distance)
  }

  async function calculatePosition() {
      let lat1, lat2, lng1, lng2;

      if (originRef.current.value){
        const { lat, lng} = await GooglePostionAPI(originRef.current.value)
        lat1 = lat
        lng1 = lng
      }

      if (destiantionRef.current.value){
        const { lat, lng} = await GooglePostionAPI(destiantionRef.current.value)
        lat2 = lat
        lng2 = lng
      }

      console.log(lat1, lat2, lng1, lng2)
      // add fare api
      // setFare
      setFare(lat1)
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    setFare('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <Box
      display={"flex"}
      position='relative'
      flexDirection='column'
      alignItems='center'
      height='92vh'
      width='100vw'
    >
      <Box position='absolute' left={0} top={0} height='100%' width='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={10}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius={"1rem"}
        m={4}
        bgcolor={'rgba(0, 0, 0, 0.7)'}
        shadow='base'
        minWidth='container.md'
        zIndex='1'
        marginTop="65vh"
      >
        <Stack direction={"row"} spacing={4} justifyItems='center' alignItems="flex-end">
          
          <Box flexGrow={1} >
            <Autocomplete>
              <Input 
                type='text'
                placeholder='출발지' 
                inputRef={originRef} 
                width={"10vw"}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: 'rgb(255, 255, 255, 0.42)'
                  }
                }}
              />
            </Autocomplete>
          </Box>
          
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='목적지'
                inputRef={destiantionRef}
                width={"10vw"}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: 'rgb(255, 255, 255, 0.42)'
                  }
                }}
              />
            </Autocomplete>
          </Box>
          
          <FormControl sx={{ m: 1, minWidth: 120, }}>
            <InputLabel id="selected" sx={{ color: "white" }}>인원수</InputLabel>
            <Select 
              labelId="selected"
              id="selected"
              value={selected}
              label="인원수"
              variant='standard'
              onChange={handleSelect}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: 'rgb(255, 255, 255, 0.42)'
                }
              }}
            >
              <MenuItem value={1}>1명</MenuItem>
              <MenuItem value={2}>2명</MenuItem>
              <MenuItem value={3}>3명</MenuItem>
              <MenuItem value={4}>4명</MenuItem>
            </Select>
          </FormControl>

          <TextField
            required
            autoFocus
            
            id="datetime-local"
            label="출발 시간"
            type="datetime-local"
            variant="standard"
            defaultValue={now.format().slice(0, 16)} //"2017-05-24T10:30"
            onChange={handleTime}
            sx={{
              "&:hover": {
                backgroundColor: 'rgb(255, 255, 255, 0.42)',
              },
              "& .MuiInputBase-root": {
                "& input": {
                  textAlign: "center",
                  color: "white"
                }
              },
              "& .MuiFormLabel-root": {
                color: 'white'
              }
            }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="SX"
          />

          
          
        </Stack>
        <Stack direction={"row"} spacing={4} mt={4} alignItems="flex-end" justifyContent="space-between">
          <ButtonGroup sx={{ color: "white" }}>
            <Button variant="outlined" disabled>
              <Typography color="white" >거리: {distance} </Typography>
            </Button>
            <Button variant="outlined" disabled>
              <Typography color="white">시간: {duration} </Typography>
            </Button>
            <Button variant="outlined" disabled>
            <Typography color="white">요금: {fare} </Typography>
            </Button>
          </ButtonGroup>
           <ButtonGroup sx={{ color: "white" }}>
            <Button
              size='large'
              onClick={calculate}
              variant="text"
              sx={{
                "&:input": {
                  color: "white"
                },
                "&:hover": {
                  color: "white",
                  backgroundColor: 'rgb(7, 177, 77, 0.42)',
                }
              }}
            >
              <Typography color="white">Predicton</Typography>
            </Button>
            <Button
              variant='text'
              onClick={clearRoute}
              sx={{
                "&:hover": {
                  backgroundColor: 'rgb(94, 33, 31, 0.42)',
                }
              }}
            >
              <FaTimes color='white' />
            </Button>
            <Button
              onClick={() => {
                map.panTo(center)
                map.setZoom(11)
              }}
              variant="text"
              sx={{
                "&:hover": {
                  color: "white",
                  backgroundColor: 'rgb(255, 255, 255, 0.42)'
                }
              }}
            >
              <FaLocationArrow color='white' />
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  )
}

export default GoogleMapsAPI