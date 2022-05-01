import { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import BannerSignup from '../../assets/Banner.png'

import './sign-up.css'

const SignupPage = () => {

  const { signup } = useAuth()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [password, setPassword] = useState('')
  const [rg, setRg] = useState('')
  const [cpf, setCpf] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [isCpf, setIsCpf] = useState(true)
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [error, setError] = useState('')

  const handleSignup = () => {
    // if (!nome | !sobrenome | !cpf | !cnpj | !endereco | !cep | !cidade | !estado | !email | !rg | !password | !passwordConf) {
    //   setError("Preencha todos os campos corretamente!")
    //   return
    // } else if 
    if (password !== passwordConf) {
      setError("As senhas não são iguais")
      return
    }

    const res = signup(email, password, nome, sobrenome, estado, cpf, cnpj, cep, cidade)
    if (res) {
      setError(res)
      console.log(setError(res))
      return
    }
    alert("usuário cadastrado com sucesso!")
    navigate("/user")
  }

  return (
    <div className='signup-container'>

      <div className='input-container'>
        <h2 className='input-title'>Cadastro</h2>

        <div>

          <div className='input-div'>
            <label>Nome  <strong style={{ color: 'red'}}>*</strong></label>
            <Input
              type="text"
              value={nome}
              onChange={(e) => [setNome(e.target.value), setError('')]}
            />
          </div>
          <div className='input-div'>
            <label>Sobrenome  <strong style={{ color: 'red'}}>*</strong></label>
            <Input
              type="text"
              value={sobrenome}
              onChange={(e) => [setSobrenome(e.target.value), setError('')]}
            />
          </div>
          <div className='input-div'>
            <label>Gênero  <strong style={{ color: 'red'}}>*</strong></label>
            <select name="genero">
              <option value="default" selected>-</option>
              <option value='nao-binario'>Não-Binário</option>
              <option value='mulher-cis'>Mulher cisgênero</option>
              <option value='homem-cis'>Homem cisgênero</option>
              <option value='homem-trans'>Mulher transgênero</option>
              <option value='mulher-trans'>Mulher transgênero</option>
            </select>
          </div>
          <div className='input-div'>
          <p>CPF/CNPJ  <strong style={{ color: 'red'}}>*</strong></p>
          <Input
            type="text"
            required
            value={isCpf ? cpf : cnpj}
            onChange={(e) => [isCpf ? setCpf(e.target.value) : setCnpj(e.target.value), setError('')]}
          />
          </div>
          <div className='input-div'>
          <p>Registro Geral  <strong style={{ color: 'red'}}>*</strong></p>
          <Input
            type="text"
            value={rg}
            onChange={(e) => [setRg(e.target.value), setError('')]}
          />
          </div>
          <div className='input-div'>
          <p>Órgão emissor  <strong style={{ color: 'red'}}>*</strong></p>
          <select name="genero">
            <option value='default' selected>-</option>
            <option value='ssp'>SSP</option>
          </select>
          </div>

          <div className='input-div-cep'>
          <p>CEP <strong style={{ color: 'red'}}>*</strong></p>
          <Input
            type="text"
            value={cep}
            onChange={(e) => [setCep(e.target.value), setError('')]}
          />
        </div>

        <div className='input-div'>
          <p>Endereço  <strong style={{ color: 'red'}}>*</strong></p>
          <Input
            type="text"
            value={endereco}
            onChange={(e) => [setEndereco(e.target.value), setError('')]}
          />
          </div>
          <div className='input-div'>
          <p>Cidade  <strong style={{ color: 'red'}}>*</strong></p>
          <Input
            type="text"
            value={cidade}
            onChange={(e) => [setCidade(e.target.value), setError('')]}
          />
          </div>
          <div className='input-div'>
          <p>Estado  <strong style={{ color: 'red'}}>*</strong></p>
          <select name="estados">
            <option value="default" selected>-</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goías</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraíma</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          </div>
          <div className='input-div'>
          <p>Digite seu e-mail <strong style={{ color: 'red'}}>*</strong></p>
        <Input
          type="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
          </div>
          <div className='input-div'>
          <p>Digite sua senha  <strong style={{ color: 'red'}}>*</strong></p>
        <Input
          type="password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
          </div>
          <div className='input-div'>
          <p>Confirme sua senha  <strong style={{ color: 'red'}}>*</strong></p>
        <Input
          type="password"
          value={passwordConf}
          onChange={(e) => [setPasswordConf(e.target.value), setError('')]}
        />
        <p className='error'>{error}</p>
          </div>
          
        </div>
        <label className='checkbox-label'>
        <input className='checkmark' type="radio"  />
          Receber ofertas e novidades por e-mail
        </label>
        
        <Button
          Text="Concluir cadastro"
          onClick={handleSignup}
        />
        <div className='signup-link'>
          Já tem conta?
          <strong>
            <Link to="/login">&nbsp;Entre</Link>
          </strong>
        </div>
      </div>

      <div className='banner-container'>
        <img src={BannerSignup} alt="banner" />
      </div>
    </div>
  );
};

export default SignupPage;