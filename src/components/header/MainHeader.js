import { Link, NavLink } from "react-router-dom"
import styled from "styled-components";
import logo from "../../assets/metamong.png"
import { Box, HStack, Text, Button } from "@chakra-ui/react";


const MainHeader = () => {
    const Image = styled.img`
        width: 100%;
        height: 100%;
    `;
    return (
        <Box sx={{ height: "12vh", display:"flex", justifyContent:"space-between", background:"#1c2841" }}>
            <Box sx={{ display:"flex"}}>
                <Link to={"/"}>
                    <Image src={logo} alt="main logo"/>
                </Link>
            </Box>
            <HStack spacing={"16"} sx={{ marginLeft: "-10vw" }}>
                <NavLink to={"/welcome"}>
                    <Button colorScheme={"whiteAlpha"} variant="link">
                        <Text fontSize={"md"} color={"white"} as="b">Welcome</Text>
                    </Button>
                </NavLink>
                <NavLink to={"/prediction"}>
                    <Button colorScheme={"whiteAlpha"} variant="link">
                        <Text fontSize={"md"} color={"white"} as="b">Prediction</Text>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://kf.ysflow.com" }} target="_blacnk">
                    <Button colorScheme={"whiteAlpha"} variant="link">
                        <Text fontSize={"md"} color={"white"} as="b">Kubeflow</Text>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://grafana.ysflow.com" }} target="_blacnk">
                    <Button colorScheme={"whiteAlpha"} variant="link">
                        <Text fontSize={"md"} color={"white"} as="b">Grafana</Text>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://argo.ysflow.com" }} target="_blacnk">
                    <Button colorScheme={"whiteAlpha"} variant="link">
                        <Text fontSize={"md"} color={"white"} as="b">Argo</Text>
                    </Button>
                </NavLink>
                <NavLink to={{ pathname: "https://argocd.ysflow.com" }} target="_blacnk">
                    <Button colorScheme={"whiteAlpha"} variant="link">
                        <Text fontSize={"md"} color={"white"} as="b">Argo CD</Text>
                    </Button>
                </NavLink>
            </HStack>
            <Box />
        </Box>
    )
}

export default MainHeader