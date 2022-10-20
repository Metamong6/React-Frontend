import { Link } from "react-router-dom";
import video from "../assets/nyc-video.mp4";
import VideoBg from "reactjs-videobg";
import { Stack, Box, Typography } from "@mui/material";


const StartPage = () => {
    return (
        <Box sx={{ 
                display:"flex",
                flexDirection: "column",
                justifyContent: "center", 
                alignItems: "center", 
                height: "100vh", 
                width: "100vw",
            }}
        >
            <VideoBg>
                <VideoBg.Source src={video} type="video/mp4"/>
            </VideoBg>
            <Stack spacing={32} justifyContent="center" alignItems="center">
                <Stack spacing={4} justifyContent="center" alignItems="center">
                    <Typography  fontSize={"8vh"} as="b" color={"#D0D0D0"}>New York City</Typography>
                    <Typography  fontSize={"5vh"} as="b" color={"#D0D0D0"}>Taxi Fare Prediction</Typography>
                </Stack>
                <Link to={"/welcome"}>
                    <Box sx={{ 
                            width: "16vw",
                            height: "8vh",
                            display:"flex", 
                            justifyContent: "center", 
                            alignItems: "center",
                            border: "6px solid #D0D0D0 ",
                            borderRadius: "16px",
                            "&:hover": {
                                backgroundColor: 'rgb(7, 177, 77, 0.42)',
                            }
                        }}
                    >
                        <Typography fontSize={"2vw"} color={"#D0D0D0"}>Get Started</Typography>
                    </Box>
                </Link>
            </Stack>
        </Box>
    )
}

export default StartPage