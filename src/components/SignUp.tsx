import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError("All fields are required");
      return;
    }
    setError("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#4ad6c2", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#b2e3df", borderRadius: 4, width: 600, height: 480, boxShadow: "0 2px 16px #b0e0e6", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", border: "3px solid #2986f5", padding: 0, justifyContent: 'flex-start' }}>
        <h1 style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 36, marginBottom: 0, fontStyle: 'italic', textAlign: 'center', marginTop: 36 }}>Helpdesk System</h1>
        <div style={{ fontSize: 22, marginBottom: 18, marginTop: 8, textAlign: 'center' }}>Sign up here</div>
        <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: 0 }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: 400, padding: "12px 16px", fontSize: 20, marginBottom: 18, border: "2px solid #222", borderRadius: 2, outline: "none", boxSizing: "border-box" }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: 400, padding: "12px 16px", fontSize: 20, marginBottom: 18, border: "2px solid #222", borderRadius: 2, outline: "none", boxSizing: "border-box" }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: 400, padding: "12px 16px", fontSize: 20, marginBottom: 18, border: "2px solid #222", borderRadius: 2, outline: "none", boxSizing: "border-box" }}
            required
          />
          {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
          <button type="submit" style={{ width: 260, background: "#2986f5", color: "#fff", fontWeight: 500, fontSize: 24, border: "none", borderRadius: 16, padding: "12px 0", margin: "10px 0 0 0", cursor: "pointer" }}>
            Sign Up
          </button>
        </form>
        <div style={{ width: 400, display: "flex", justifyContent: "space-between", position: "absolute", left: 100, bottom: 36 }}>
          <span style={{ color: "#e53935", fontSize: 15, cursor: "pointer", textAlign: "left" }} onClick={() => navigate('/forgot-password')}>Forgot password</span>
          <span style={{ color: "#111", fontSize: 18, cursor: "pointer", textAlign: "right" }} onClick={() => navigate('/')}>Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp; 