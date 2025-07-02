import Layout from "./Layout";
import { FaTachometerAlt, FaDatabase, FaCog, FaHistory } from "react-icons/fa";
import "./AdminUserLogHistory.css";

const adminSidebar = [
  { path: "/admin/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/admin/database", icon: <FaDatabase />, label: "Database" },
  { path: "/admin/setting", icon: <FaCog />, label: "Setting" },
  { path: "/admin/user-log-history", icon: <FaHistory />, label: "User Log History" },
];

const logs = [
  { no: 1, signIn: "130821 / 0800", staffId: "XL000001", dept: "OT", activity: "Create Team", signOut: "130821 / 0815" },
  { no: 2, signIn: "130821 / 0805", staffId: "", dept: "", activity: "", signOut: "130821 / 0810" },
  { no: 3, signIn: "", staffId: "", dept: "", activity: "", signOut: "" },
  { no: 4, signIn: "", staffId: "", dept: "", activity: "", signOut: "" },
  { no: 5, signIn: "", staffId: "", dept: "", activity: "", signOut: "" },
];

function AdminUserLogHistory() {
  return (
    <Layout sidebarItems={adminSidebar}>
      <div className="userlog-container">
        <h2 className="userlog-title">User Log History</h2>
        <div className="userlog-controls">
          <span>Show:</span>
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>Entries</span>
        </div>
        <div className="userlog-table-wrapper">
          <table className="userlog-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Date/Sign InTime</th>
                <th>Staff ID</th>
                <th>Department</th>
                <th>Activity</th>
                <th>Date/Sign Out time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, idx) => (
                <tr key={log.no} className={idx % 2 === 1 ? "even-row" : "odd-row"}>
                  <td>{log.no}.</td>
                  <td>{log.signIn}</td>
                  <td>{log.staffId}</td>
                  <td>{log.dept}</td>
                  <td>{log.activity}</td>
                  <td>{log.signOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="userlog-footer">
          <span>Showing 1 to 5 of 5 entries</span>
          <div className="pagination">
            <span>{'≪'}</span>
            <span className="active">1</span>
            <span>{'≫'}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminUserLogHistory; 