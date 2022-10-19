import { VStack ,Container, Text } from "@chakra-ui/react";
import MainHeader from "../components/header/MainHeader";


const WelcomePage = () => {
    return (
        <>
            <MainHeader />
            <Container>
            <VStack spacing={"12"}>
                <Text fontSize={"6xl"}>MLOps Project</Text>
                <Text fontSize={"4xl"}>Team06 - metamong</Text>

                <Text fontSize={"2xl"}>Data</Text>
                <Text fontSize={"lg"}>세연, 주호, 지원</Text>

                <Text fontSize={"2xl"}>ML </Text>
                <Text fontSize={"lg"}>종수, 용성</Text>

            </VStack>
            </Container>
        </>
    )
}

export default WelcomePage