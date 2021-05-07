import { ChatEngine } from 'react-chat-engine'
import './App.css'
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height= "100vh"
            projectID = "4f9cd9e8-2ac0-4b2e-a124-d01107f6a8d1"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} /> }
        />
    )
}

export default App;