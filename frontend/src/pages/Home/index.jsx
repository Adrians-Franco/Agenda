import { Link } from "react-router-dom"
import { AuthContext } from '../../auth/Content'
import { useContext } from 'react'


function Home() {

    const { token } = useContext(AuthContext)

    return (
        <main>

            {
                !token
                    ? null
                    : <Link to='/self/atendimentos'>
                        <button>
                            Atendimentos
                        </button>
                    </Link>
            }


            {
                !token
                    ? null
                    : <Link to='/clientes'>
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