import { useState } from 'react'
import axios from 'axios';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const authObject = {'Project-ID': '8821ebeb-34a9-4f32-8219-b86686f3742e', 
                        'User-Name': username,
                        'User-Secret': password
                       }
  
    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      // if credentials are true, then save to local storage to prevent all time login
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // reload the page
      window.location.reload()
    } catch (error) {
      setError("Please double check your credentials!")
    }


  };

  return ( 

    <div className="wrapper">
      <div className="form">
        <h1 className="title"> Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)} className="input" placeholder="User name here" required />
          <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="input" placeholder="Password here" required />

          <div className="" align="center">
            <button type="submit" className="button">
              <span>Chat now</span>
            </button>
          </div>
          <h2 className="error" style={{color: "yellow"}} align="center">{error}</h2>
        </form>
      </div>
    </div>

   );
}
 
export default LoginForm;