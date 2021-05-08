import { useState } from "react"
import axios from 'axios'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {'PRIVATE-KEY': '292f83f5-64a9-42c3-95c2-8a2d8ad7dbe0'}

        // ,'Project-ID': '4f9cd9e8-2ac0-4b2e-a124-d01107f6a8d1' , 'User-Name': username, 'User-Secret': password 
        try{
          await  axios.post('https://api.chatengine.io/users/',{ headers: authObject ,  body: {
            'username': username,
            'secret': password}
          })  

          localStorage.setItem('username', username)
          localStorage.setItem('password', password)

          window.location.reload();
        } catch (error) {
            setError('Oops! Something Went Wrong. ')
        }
    }
    return(
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <h3 className='title'>Create Account</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    {/* <input type='password' value={password}  className='input' placeholder='Confirm Password' required /> */}
                    <div align="center">
                        <button type='submit' className='button'>Enetr Chatroom</button> 
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default SignUp