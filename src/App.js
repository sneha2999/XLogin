import React,{useState} from "react";


function App() {
  const [inputval, setInputval] = useState({
    username:"",
    password:""
  });
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (event) => {
    const {name,value} = event.target;
    setInputval({...inputval,[name]:value});
  };

  console.log(inputval)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let errMsg = "Invalid username or password";
    let successMsg = "";
    const {username,password} = inputval;
    if(username === "user" && password === "password"){
      successMsg = `Welcome, ${username}!`;
      setMsg(successMsg)
      setErrorMsg("");
    }else{
      setErrorMsg(errMsg);
      setMsg("")
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {errorMsg && (
        <div>
          <p>{errorMsg}</p>
        </div>
      )}
      {msg ? (
        <div>
          <p>{msg}</p>
        </div>
      ):(
        <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Username:
          </label>
          <input
              type="text"
              placeholder="username"
              name="username"
              value={inputval.username}
              onChange={handleChange}
              required
            />
        </div>
        <div>
          <label>
            Password:
          </label>
          <input
              type="password"
              placeholder="password"
              name="password"
              value={inputval.password}
              onChange={handleChange}
              required
            />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      )}
    </div>
  )
}

export default App;
