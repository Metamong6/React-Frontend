import { Link } from "react-router-dom";
import video from "../assets/nyc-video.mp4";
import VideoBg from "reactjs-videobg";
import { Box, Text } from "@chakra-ui/react";


const StartPage = () => {
    return (
        <Box sx={{ 
                display:"flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100vh", 
                width: "100vw",
            }}
        >
            <VideoBg>
                <VideoBg.Source src={video} type="video/mp4"/>
            </VideoBg>

            <Link to={"/welcome"}>
                <Box sx={{ 
                        width: "16vw",
                        height: "12vh",
                        display:"flex", 
                        justifyContent: "center", 
                        alignItems: "center",
                        border: "1px solid black",
                        fontSize: "2rem",
                        color: "white",
                        borderRadius: "8px",
                        "&:hover": {
                            backgroundColor: 'rgb(7, 177, 77, 0.42)',
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                        }
                    }}
                >
                    <Text fontSize={"2xl"} color="white" as="b">Get Started</Text>
                </Box>
            </Link>
        </Box>
    )
}

export default StartPage