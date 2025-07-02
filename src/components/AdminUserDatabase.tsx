import Layout from "./Layout";
import { FaTachometerAlt, FaDatabase, FaCog, FaHistory, FaEdit, FaTrash } from "react-icons/fa";
import "./AdminUserDatabase.css";

const adminSidebar = [
  { path: "/admin/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/admin/database", icon: <FaDatabase />, label: "Database", dropdownItems: [
    { label: "User Database", path: "/admin/database/user" },
    { label: "Ticket Database", path: "/admin/database/ticket" },
  ] },
  { path: "/admin/setting", icon: <FaCog />, label: "Setting" },
  { path: "/admin/user-log-history", icon: <FaHistory />, label: "User Log History" },
];

const tabs = [
  { label: "User", key: "user" },
  { label: "Operation Team", key: "operation" },
  { label: "Technical Support", key: "technical" },
];

const users = [
  { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
  { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
  { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
];

function AdminUserDatabase() {
  return (
    <Layout sidebarItems={adminSidebar}>
      <div className="db-container">
        <h2 className="db-title">Database</h2>
        {/* Tab Bar */}
        <div className="db-tabs">
          {tabs.map(tab => (
            <div
              key={tab.key}
              className={"db-tab" + (tab.key === 'user' ? " active" : "")}
            >
              {tab.label}
            </div>
          ))}
        </div>
        {/* Controls */}
        <div className="db-controls">
          <div className="db-search-box">
            <input type="text" placeholder="Find ticket" />
            <span className="db-search-icon">🔍</span>
          </div>
          <div className="db-entries-control">
            <span>Show:</span>
            <select>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>Entries</span>
          </div>
        </div>
        <hr className="db-divider" />
        {/* Table */}
        <table className="db-table">
          <thead>
            <tr>
              <th></th>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Speciality</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className={idx % 2 === 1 ? "even-row" : "odd-row"}>
                <td className="db-checkbox-cell"><input type="checkbox" /></td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.department}</td>
                <td>{user.speciality}</td>
                <td className="db-setting-cell">
                  <FaEdit className="db-setting-icon" />
                  <FaTrash className="db-setting-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="db-footer">
          <span>Showing 1 to 3 of 3 entries</span>
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

export default AdminUserDatabase; 