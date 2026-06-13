import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
const Register = () => {

     const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register </h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name='username' placeholder='enter username '/>
             </div>
             <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' placeholder='enter a email address '/>
             </div>
             <div className="input-group">
                <label htmlFor="password">password</label>
                <input type="password" id="password" name='password' placeholder='enter a password '/>
             </div>

             <button className='button primary-button'>Register</button>

            </form>

            <p>Already have an Account? <Link to={"/login"}> Login</Link></p>
        </div>
    </main>
  )
}

export default Register