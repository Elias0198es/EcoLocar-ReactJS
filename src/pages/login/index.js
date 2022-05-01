import React, { useState } from "react";
import Logo from '../../assets/logo.png'
import UserIcon from '../../assets/user.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import BannerLogin from '../../assets/Banner.png'

import './login.css'


const LoginPage = () => {

  const { signout } = useAuth()
  const { login } = useAuth()
  const navigate = useNavigate()

  const loginNome = JSON.parse(localStorage.getItem('users_bd'))

  const [isLogged, setIsLogged] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos corretamente!")
      return
    }
    const res = login(email, password)
    if (res) {
      setError(res)
      return
    }
    navigate("/user")
  }


  return (
    <div>

      <div className="user-header">
        <div className='logo'>
        <img src={Logo} alt="Logo" />
        </div>
        {isLogged ? (
          <div className='user-greeting'>
            <h1 style={{ paddingRight: '10px' }} >Bem vindo, {loginNome[0].nome}</h1>
            <img style={{ height: '30px', paddingRight: '10px', paddingLeft: '10px' }} src={UserIcon} alt="" />
            <button style={{ paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', fontSize: '14px' }} Text="Sair" onClick={() => [signout(), navigate('/')]}>Sair</button>
          </div>
        ) : (
          <button style={{ paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', fontSize: '14px' }} Text="Sair" onClick={() => [signout(), navigate('/')]}>Voltar home</button>
        )}
      </div>

      <div className='login-container'>

        <div className='input-container'>
          <h2 className='input-title'>Login</h2>
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
            <div className='login-link'>
              Não tem conta?
              <strong>
                <Link to="/sign">&nbsp;Registre-se</Link>
              </strong>
            </div>
          </div>
        </div>

        <div className='banner-container'>
          <img src={BannerLogin} alt="banner" />
        </div>
      </div>
    </div>

  );
};

export default LoginPage;