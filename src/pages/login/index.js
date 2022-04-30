import { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const LoginPage = () => {
  
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  console.log('LOGIN-STATE', email, password, error)

  const handleLogin = () => {
    if(!email | !password) {
      setError("Preencha todos os campos corretamente!")
      return
    }

    const res = login(email, password)
    if(res) {
      setError(res)
      return
    }

    navigate("/user")
  }


  return (
    <div className='login-container'>
      <div>
      <h1>Login</h1>
      </div>
        <div>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError('')]}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError('')]}
          />
          <p>{error}</p>
          <Button
            Text="Entrar"
            onClick={handleLogin}
          />
          <div>
            Não tem conta?
            <strong>
              <Link to="/sign">&nbsp;Registre-se</Link>
            </strong>
          </div>
        </div>
    </div>
  );
};

export default LoginPage;