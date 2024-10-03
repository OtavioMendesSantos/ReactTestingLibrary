import { Link } from "react-router-dom"
import styles from "./Home.module.scss"

const Home = () => {
    return (
        <div>
            <Link to={"/login"}>Login</Link>
        </div>
    )
}

export default Home