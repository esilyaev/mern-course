import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, error, request, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(()=>{
    message(error)
    clearError()
  }, [error, message, clearError])


  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      message(data.message)
      auth.login(data.token, data.userId)
    } catch (error) {

    }
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
      console.log('DATA', data)

    } catch (error) {

    }
  }

  const changeHandler = event => {
    setForm({
      ...form, [event.target.name]: event.target.value
    })
  }
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сократи ссылку</h1>

        <div className="card blue-grey darken-1">

          {/* CARD TITLE */}

          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
          </div>


          <div>
            <div className="input-field ">
              <input type="text" placeholder="Введите email" id="email" name="email" onChange={changeHandler} />
              <label htmlFor="email">email</label>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Введите пароль" id="password" name="password" onChange={changeHandler} />
              <label htmlFor="password">password</label>
            </div>
          </div>


          {/* CONTROLS */}
          <div className="card-action">
            <button className="btn yellow darken-4"
              onClick={loginHandler} disabled={loading}>
              Войти</button>
            <button className="btn green darken-4"
              onClick={registerHandler} disabled={loading}>
              Регистрация</button>
          </div>
        </div>

      </div>
    </div>
  )
}