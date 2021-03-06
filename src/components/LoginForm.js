import { useState } from "react"
import axios from 'axios'
const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {'Project-ID': '4f9cd9e8-2ac0-4b2e-a124-d01107f6a8d1' , 'User-Name': username, 'User-Secret': password }

        try{
          await  axios.get('https://api.chatengine.io/chats', { headers: authObject })

          localStorage.setItem('username', username)
          localStorage.setItem('password', password)

          window.location.reload();
        } catch (error) {
            setError('Oops! incorrect credentials.')
        }
    }
    return(
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align="center">
                        <button type='submit' className='button'>Enter Chatrooms</button> 
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
                <div className='sub'>
                    <p className=' sub'>Working on Adding signUp feature</p>
                    <p className=' sub'>Till Then here are Test Credentitals</p>
                    <p className=' sub'>Username: test</p>
                    <p className=' sub'>Password: 1234</p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm