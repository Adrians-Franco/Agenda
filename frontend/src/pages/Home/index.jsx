import { Link } from "react-router-dom"
import { AuthContext } from '../../auth/Content'
import { useContext } from 'react'


function Home() {

    return (
        <main>
            <Link to='/user'>
                <button>
                    Atendimentos
                </button>
            </Link>

              {
                
                   
                     <Link to='/clientes'>
                        <button>
                            Clientes
                        </button>
                    </Link>
            }

            <Link to='/login'>
                <button>
                    Login
                </button>
            </Link>
        </main>


    )
}

export default Home