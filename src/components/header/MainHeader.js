import { Link, NavLink } from "react-router-dom"
import styled from "styled-components";
import logo from "../../assets/logo.png"
import classes from "./MainHeader.module.css"

const MainHeader = () => {
    const Image = styled.img`
        width: 100px;
        height: 100px;
        object-fit: cover;
    `;
    return (
        <header className={classes.header}>

            <nav>
                <ul>
                    <Link to={"/"}>
                        <Image src={logo} alt="main logo" />
                    </Link>
                    <li>
                        <NavLink activeClassName={classes.active} to={"/welcome"}>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={"/map"}>Map</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={"/kubeflow"}>Kubeflow</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={"/grafana"}>Grafana</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={"/jenkins"}>Jenkins</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={"/argo"}>Argo</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader