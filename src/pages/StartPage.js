import { Link } from "react-router-dom";
import video from "../assets/nyc-video.mp4";
import { Stack, Box, Typography } from "@mui/material";
import "./StartPage.css";


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
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"></source>
            </video>

            <Stack spacing={24} justifyContent="center" alignItems="center">
                <Stack spacing={4} justifyContent="center" alignItems="center">
                    <Typography  fontSize={"8vh"} as="b" color={"#D0D0D0"}>New York City</Typography>
                    <Typography  fontSize={"5vh"} as="b" color={"#D0D0D0"}>Taxi Fare Prediction</Typography>
                </Stack>
                <Link to={"/prediction"}>
                    <Box sx={{ 
                            width: "16vw",
                            height: "10vh",
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