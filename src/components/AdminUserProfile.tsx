import Layout from "./Layout";
import { FaUser, FaTachometerAlt, FaDatabase, FaCog, FaHistory } from "react-icons/fa";
import { useState } from "react";
import "./Dashboard.css";

const adminSidebar = [
  { path: "/admin/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/admin/database", icon: <FaDatabase />, label: "Database", dropdownItems: [
    { label: "User Database", path: "/admin/database/user" },
    { label: "Ticket Database", path: "/admin/database/ticket" },
  ] },
  { path: "/admin/setting", icon: <FaCog />, label: "Setting" },
  { path: "/admin/user-log-history", icon: <FaHistory />, label: "User Log History" },
];

function AdminUserProfile() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <Layout sidebarItems={adminSidebar}>
      <h2 className="main-title" style={{ textAlign: 'left', marginBottom: 24 }}>Admin Profile</h2>
      <div style={{ background: '#7be0d6', borderRadius: 0, padding: 32, minHeight: 400, display: 'flex', alignItems: 'flex-start', gap: 48 }}>
        <div style={{ display: 'flex', gap: 48 }}>
          {/* Profile Card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '2px 4px 8px #d3d3d3', padding: '32px 32px 32px 32px', minWidth: 300, minHeight: 280, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ position: 'absolute', top: 18, right: 18, cursor: 'pointer' }} onClick={() => window.location.href = '/admin/profile/edit'}>
              <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4515 15.1579L25.4045 13.0358C26.0865 12.2947 26.9545 11.8905 27.9 11.7895V10.1053L18.6 0H3.1C1.3795 0 0 1.49895 0 3.36842V26.9474C0 27.8407 0.326606 28.6975 0.907969 29.3292C1.48933 29.9609 2.27783 30.3158 3.1 30.3158H12.4V27.1663L12.6015 26.9474H3.1V3.36842H13.95V15.1579H23.4515ZM17.05 2.52632L25.575 11.7895H17.05V2.52632ZM25.0015 18.24L28.1635 21.6758L18.662 32H15.5V28.5642L25.0015 18.24ZM30.7675 18.8463L29.2485 20.4968L26.0865 17.0611L27.6055 15.4105C27.9 15.0737 28.4115 15.0737 28.7215 15.4105L30.7675 17.6337C31.0775 17.9705 31.0775 18.5263 30.7675 18.8463Z" fill="black"/>
              </svg>
            </span>
            <div style={{ background: '#e5e5e5', borderRadius: '50%', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <FaUser size={54} />
            </div>
            <div style={{ textAlign: 'left', fontSize: 18, marginTop: 8 }}>
              Admin Username<br />
              Contact Number<br />
              Email<br />
              Department: Administration
            </div>
          </div>
          {/* Feedback Card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '2px 4px 8px #d3d3d3', padding: '24px 32px 32px 32px', minWidth: 320, minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>Give Your Feedback</div>
            <textarea
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              placeholder="[Lorem Ipsum]"
              style={{ width: '100%', minHeight: 32, borderRadius: 6, border: '1px solid #bbb', marginBottom: 12, padding: 6, fontSize: 16, resize: 'none', background: '#e5e5e5' }}
            />
            <div style={{ marginBottom: 16 }}>
              {[1, 2, 3, 4, 5].map(i => (
                <span
                  key={i}
                  style={{ fontSize: 28, color: i <= rating ? '#ffd700' : '#bbb', cursor: 'pointer' }}
                  onClick={() => setRating(i)}
                >
                  ★
                </span>
              ))}
            </div>
            <button style={{ background: '#3ed6c2', color: '#222', border: 'none', borderRadius: 16, fontSize: 18, fontWeight: 500, padding: '8px 32px', cursor: 'pointer', marginTop: 4 }}>Submit Feedback</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminUserProfile; 