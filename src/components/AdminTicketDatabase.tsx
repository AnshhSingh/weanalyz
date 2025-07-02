import Layout from "./Layout";
import { FaTachometerAlt, FaDatabase, FaCog, FaHistory } from "react-icons/fa";
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

function AdminTicketDatabase() {
  return (
    <Layout sidebarItems={adminSidebar}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '2px 4px 8px #d3d3d3', padding: '32px', minWidth: 500, maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 500, marginBottom: 24 }}>Ticket Database</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 18 }}>
          <thead>
            <tr style={{ background: '#e5e5e5' }}>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Ticket No</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Subject</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Status</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px 8px' }}>1234</td>
              <td style={{ padding: '10px 8px' }}>Login issue</td>
              <td style={{ padding: '10px 8px' }}>In Progress</td>
              <td style={{ padding: '10px 8px' }}>John Doe</td>
            </tr>
            <tr style={{ background: '#f5f5f5' }}>
              <td style={{ padding: '10px 8px' }}>1124</td>
              <td style={{ padding: '10px 8px' }}>New ticket issue</td>
              <td style={{ padding: '10px 8px' }}>Closed</td>
              <td style={{ padding: '10px 8px' }}>Jane Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default AdminTicketDatabase; 