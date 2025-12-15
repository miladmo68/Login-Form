import { useState } from "react";

function App() {
  const data = [
    {
      email: "test1@gmail.com",
      password: "12345",
    },
    {
      email: "test2@gmail.com",
      password: "12345",
    },
    {
      email: "test3@gmail.com",
      password: "12345",
    },
    {
      email: "test4@gmail.com",
      password: "12345",
    },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    console.log("Login");
    console.log("Email: " + email);
    console.log("Password: " + password);

    if (
      data.find((item) => item.email == email.toLowerCase()) &&
      data.find((item) => item.password == password.toLowerCase())
    ) {
      setSuccess("You Logged in Successfully ...");
    }

    setError("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder="Username..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
          />

          <input
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
          />

          <button
            type="submit"
            className="mt-2 py-3 rounded-xl bg-blue-600 text-white font-semibold
                   hover:bg-blue-700 active:scale-95 transition-all"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}

export default App;
