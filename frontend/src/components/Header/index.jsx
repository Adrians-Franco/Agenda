import { Link } from "react-router-dom"
import './style.css'

function Header() {


    return (
        <header>
            <h1>Prova de Backend e Frontend</h1>

            <Link to={'/'}>
                <button>
                    Voltar para Home
                </button>
            </Link>
            

        </header >
    )
}

export default Header