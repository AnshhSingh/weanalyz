import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("If this email exists, a reset link will be sent.");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#4ad6c2", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#b2e3df", borderRadius: 4, width: 600, height: 400, boxShadow: "0 2px 16px #b0e0e6", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", border: "3px solid #2986f5" }}>
        <div style={{ fontSize: 20, marginBottom: 32, marginTop: -30, textAlign: 'center', maxWidth: 500 }}>
          Don't worry, Enter your email below and we will<br />send you a link to change password.
        </div>
        <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: 400, padding: "12px 16px", fontSize: 20, marginBottom: 22, border: "2px solid #222", borderRadius: 2, outline: "none", boxSizing: "border-box" }}
            required
          />
          {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
          {success && <div style={{ color: "green", marginBottom: 8 }}>{success}</div>}
          <button type="submit" style={{ width: 260, background: "#00d12e", color: "#fff", fontWeight: 500, fontSize: 24, border: "none", borderRadius: 16, padding: "12px 0", margin: "10px 0 0 0", cursor: "pointer" }}>
            Submit
          </button>
        </form>
        <button style={{ width: 260, background: "#156ef5", color: "#fff", fontWeight: 500, fontSize: 24, border: "none", borderRadius: 16, padding: "12px 0", margin: "24px 0 0 0", cursor: "pointer" }}
          onClick={() => navigate('/')}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword; 