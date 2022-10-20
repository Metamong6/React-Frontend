import { Stack, Typography, Box } from "@mui/material"
import MainHeader from "../components/header/MainHeader";


const AboutPage = () => {
    return (
        <>
            <MainHeader />
            <Box 
                sx={{
                    background: "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
                    height: "92vh",
                    width: "100vw",
                }}
            >
                    <Stack spacing={"10vh"}>
                        <Stack spacing={4} alignItems= "flex-start" marginTop="4vh" marginLeft="11vw">
                            <Typography fontSize={"6vh"} color={"#D0D0D0"} as="b"><b>Team06 - metamong</b></Typography>
                            <Stack direction={"row"} spacing={4} alignItems="flex-end">
                                <Typography fontSize={"2.5vh"} color={"#D0D0D0"}>Member </Typography>
                                <Typography fontSize={"3vh"} color={"#D0D0D0"}>세연</Typography>
                                <Typography fontSize={"3vh"} color={"#D0D0D0"}>주호</Typography>
                                <Typography fontSize={"3vh"} color={"#D0D0D0"}>지원</Typography>
                                <Typography fontSize={"3vh"} color={"#D0D0D0"}>종수</Typography>
                                <Typography fontSize={"3vh"} color={"#D0D0D0"}>용성</Typography>
                            </Stack>
                        </Stack>

                        <Stack direction={"row"} spacing={16} alignItems="flex-start" justifyContent="center" width="100vw">
                            <Stack> 
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>Data Pipeline</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">HDFS</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Spark</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Hive</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Yarn</Typography>
                                </Stack>
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">______________________ </Typography>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>ML Pipeline</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Minikube</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Docker</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Kubeflow</Typography>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>Meta Store</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">DVC</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">S3</Typography>
                                </Stack>
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">______________________ </Typography>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>Model Store</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">MLflow</Typography>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>Monitering</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Prometheus</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Grafana</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Locust</Typography>
                                </Stack>
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">______________________ </Typography>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>CI/CD</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Argo/Argocd</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Git Actions</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Jenkins</Typography>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>Back End</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Seldon Core</Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">Fast API</Typography>
                                </Stack>
                                <Stack height={"23vh"} alignItems="center" spacing={1}>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">______________________ </Typography>
                                    <Typography fontSize={"4vh"} color={"#D0D0D0"} as="b"><b>Front End</b></Typography>
                                    <Typography fontSize={"2.5vh"} color={"#D0D0D0"} as="b">React</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
            </Box>
        </>
    )
}

export default AboutPage


