import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="Username ..." value={email} className="" />
        <input placeholder="Username ..." value={email} className="" />
        <button type="submit" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
