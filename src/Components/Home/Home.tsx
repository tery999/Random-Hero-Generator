import { Link } from "react-router-dom"
import "./Home.css"
export default function Home () {
    return (
        <div className="container home">
            <h1>Създай герой</h1>
            <Link to="Quick">Бърз</Link>
            <Link to="Complex">Сложен</Link>
        </div>
    )
}