import React from 'react';
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Logo from '../../assets/logo.png'
import Graphic from '../../assets/Grafico.png'
import Wallet from '../../assets/wallet.png'
import UserIcon from '../../assets/user.png'
import BannerNews from '../../assets/Newsletter.png'

import './user.css'


const UserPage = () => {
  const { signout } = useAuth()
  const navigate = useNavigate()

  const loginNome = JSON.parse(localStorage.getItem('users_bd'))

  console.log(loginNome)

  return (
    <div>
      <div className="user-header">
        <div className='logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='user-greeting'>
          <h1 style={{ paddingRight: '10px' }} >Bem vindo, {loginNome[0].nome}</h1>
          <img style={{ height: '30px', paddingRight: '10px', paddingLeft: '10px' }} src={UserIcon} alt="" />
          <button style={{ paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', fontSize: '14px'}} Text="Sair" onClick={() => [signout(), navigate('/')]}>Sair</button>
        </div>
      </div>

      <div>

        <div className='user-area'>
          <div className='graphic-container'>
            <div className='investment-image'>
              <img src={Wallet} alt="" />
            </div>
            <div className='investment-container'>
              <p>Investimento</p>
              <br />
              <h1>R$ 0,00</h1>
              <br/>
              <p>Crédito de carbono</p>
              <br />
              <h1>0,00</h1>
            </div>
          </div>
          <img src={Graphic} alt="Gráfico" />
        </div>
        <div className="banner-florest">
          <img src={BannerNews} alt="Banner" />
        </div>

      </div>

    </div>

  );
};

export default UserPage