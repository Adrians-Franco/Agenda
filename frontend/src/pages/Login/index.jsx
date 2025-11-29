import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCliente } from '../../api/clientes';
import { AuthContext } from '../../auth/Content'

export default function Login() {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleBackClick = () => {
        navigate('/');
    };

    const handleSignUP = () => {
        navigate('/signup');
    };

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await loginCliente(email, senha)
            console.log(response)
            login(response.data.token)
            navigate('/')
        } catch (error) {
            console.log("Email ou senha inválidos")
        }
    }

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <button className="button"
                    type="submit"
                    onClick={handleLogin}
                >Entrar</button>
                <button className="button back-button"
                    onClick={handleBackClick}
                >
                    Voltar
                </button>
                <p className='text-signup'>Não possui conta?
                    <button className='button-signup'
                        onClick={handleSignUP}
                    >Cadastre-se</button>
                </p>
            </form>
        </div>
    );
}