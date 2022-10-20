import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/logo.png"
import { Box, Stack, Typography, Button } from "@mui/material"

const Image = styled.img`
    width: 90%;
    height: 100%;
    margin-left: 0.5vw;
`;

const MainHeader = () => {
    
    return (
        <Box sx={{ height: "8vh", display:"flex", justifyContent:"space-between", background:"#1c2841" }}>
            <Link to={"/"}>       
                    <Image src={logo} alt="main logo"/>
            </Link>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                marginRight="6vw"
            >
                <NavLink to={"/welcome"}>
                    <Button variant="text" size="large" sx={{ borderRadius:"1vw" }}>
                        <Typography variant="button" display="block" gutterBottom color="white">Welcome</Typography>
                    </Button>
                </NavLink>
                <NavLink to={"/prediction"}>
                    <Button variant="text" size="large" sx={{ borderRadius:"1vw" }}>
                        <Typography variant="button" display="block" gutterBottom color="white">Prediction</Typography>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://kf.ysflow.com" }} target="_blacnk">
                    <Button variant="text" size="large" sx={{ borderRadius:"1vw" }}>
                        <Typography variant="button" display="block" gutterBottom color="white">Kubeflow</Typography>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://grafana.ysflow.com" }} target="_blacnk">
                    <Button variant="text" size="large" sx={{ borderRadius:"1vw" }}>
                        <Typography variant="button" display="block" gutterBottom color="white">Grafana</Typography>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://argo.ysflow.com" }} target="_blacnk">
                    <Button variant="text" size="large" sx={{ borderRadius:"1vw" }}>
                        <Typography variant="button" display="block" gutterBottom color="white">Argo</Typography>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://argocd.ysflow.com" }} target="_blacnk">
                    <Button variant="text" size="large" sx={{ borderRadius:"1vw" }}>
                        <Typography variant="button" display="block" gutterBottom color="white">Argo CD</Typography>
                    </Button>
                </NavLink>
            </Stack>
            <Box />
        </Box>
    )
}

export default MainHeader