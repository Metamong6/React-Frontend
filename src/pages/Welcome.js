import { Route } from "react-router-dom"

import { Text } from "@chakra-ui/react"
import "./welcome.module.css"

const Welcome = () => {
    return (
        <section>
            <Text fontSize={"6xl"}>Welcome to MLOps Project!</Text>
            <Text fontSize={"5xl"}>Team 6 - Metamong</Text>

            <Route path={"/welcome/new-user"}>
                <Text>Welcome. new user!</Text>
            </Route>
        </section>
    )
}

export default Welcome