import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "../auth.form.scss"

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
             <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' placeholder='enter a email address '/>
             </div>
             <div className="input-group">
                <label htmlFor="password">password</label>
                <input type="password" id="password" name='password' placeholder='enter a password '/>
             </div>

             <button className='button primary-button'>Login</button>

            </form>
             <p>Not have an Account? <Link to={"/register"}> Register</Link></p>
        </div>
    </main>
  )
}

export default Login