import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Cliente API</h1>
            <nav>
                <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link>
                <Link to='/cliente'>
                    <button>
                        API
                    </button>
                </Link>
            </nav>
        </header>
    )
}