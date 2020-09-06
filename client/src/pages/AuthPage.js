import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook'

export const AuthPage = () => {
  const { loading, error, request } = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  // console.log(form)

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
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
              disabled={loading}>
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