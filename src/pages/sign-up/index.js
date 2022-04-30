import { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const SignupPage = () => {

  const { signup } = useAuth()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [emailConf, setEmailConf] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  console.log('SIGNUP-STATE', nome, email, emailConf, password, error)

  const handleSignup = () => {
    if(!nome | !email | !password | !emailConf) {
      setError("Preencha todos os campos corretamente!")
      return
    } else if(email !== emailConf) {
      setError("Os e-mails não são iguais")
      return
    }

    const res = signup(email, password, nome)
    if(res) {
      setError(res)
      return
    }
    alert("usuário cadastrado com sucesso!")
    navigate("/user")
  }

  return (
    <div>
      <div>
      <h1>Cadastre-se</h1>
      </div>
        <div>
        <Input
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setError('')]}
          />
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError('')]}
          />
          <Input
            type="email"
            placeholder="Confirme seu e-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError('')]}
          />
           <Input
            type="password"
            placeholder="Cadastre a sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError('')]}
          />
          <p>{error}</p>
          <Button
            Text="Inscrever-se"
            onClick={handleSignup}
          />
          <div>
            Não tem conta?
            <strong>
              <Link to="/login">&nbsp;Entre</Link>
            </strong>
          </div>
        </div>
    </div>
  );
};

export default SignupPage;