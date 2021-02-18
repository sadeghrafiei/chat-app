import { ChatEngine} from "react-chat-engine";

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import "./App.css";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm /> 
  return (
    <ChatEngine
      height="100vh"
      projectID="472750ee-ddbe-479d-a36a-033ae626c2cf"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
