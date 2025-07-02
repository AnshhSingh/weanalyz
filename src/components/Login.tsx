import { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#4ad6c2", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#a7e6e2", borderRadius: 4, padding: 48, minWidth: 400, minHeight: 320, boxShadow: "0 2px 16px #b0e0e6", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontFamily: 'sans-serif', fontWeight: 600, fontSize: 32, marginBottom: 32, fontStyle: 'italic', textAlign: 'center' }}>Helpdesk System</h1>
        <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: 280, padding: "10px 12px", fontSize: 18, marginBottom: 18, border: "1px solid #888", borderRadius: 2, outline: "none" }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: 280, padding: "10px 12px", fontSize: 18, marginBottom: 18, border: "1px solid #888", borderRadius: 2, outline: "none" }}
            required
          />
          {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
          <button type="submit" style={{ width: 180, background: "#00c853", color: "#fff", fontWeight: 500, fontSize: 20, border: "none", borderRadius: 8, padding: "10px 0", margin: "12px 0 0 0", cursor: "pointer" }}>
            Sign In
          </button>
        </form>
        <div style={{ width: 280, display: "flex", justifyContent: "space-between", marginTop: 18 }}>
          <span style={{ color: "#e53935", fontSize: 14, cursor: "pointer" }}>Forgot password</span>
          <span style={{ color: "#111", fontSize: 16, cursor: "pointer" }}>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
