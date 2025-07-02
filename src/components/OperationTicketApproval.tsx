import Layout from "./Layout";
import { FaTachometerAlt, FaTicketAlt, FaClipboardList, FaChartLine } from "react-icons/fa";
import { FaCheck, FaTimes, FaChevronDown } from "react-icons/fa";
import "./OperationTicketApproval.css";

const operationSidebar = [
  { path: "/operation/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/operation/ticket-approval", icon: <FaTicketAlt />, label: "Ticket Approval" },
  { path: "/operation/myticket", icon: <FaClipboardList />, label: "My Ticket" },
  { path: "/operation/performance", icon: <FaChartLine />, label: "Performance" },
];

const tickets = [
  { ticketNo: "1234", subject: "Login issue", category: "Access issue", priority: "High", date: "13/08/21" },
  { ticketNo: "1124", subject: "New ticket issue", category: "Access issue", priority: "Medium", date: "14/08/21" },
  { ticketNo: "1224", subject: "New request", category: "Feedback", priority: "Low", date: "13/08/21" },
  { ticketNo: "1244", subject: "Ticket submission", category: "Ticketing", priority: "High", date: "14/08/21" },
  { ticketNo: "1114", subject: "Login issue", category: "Access issue", priority: "High", date: "3/08/21" },
];

function OperationTicketApproval() {
  return (
    <Layout sidebarItems={operationSidebar}>
      <h2 className="main-title">Ticket Approval</h2>
      <div className="ticket-controls">
        <div className="search-box">
          <input type="text" placeholder="Find ticket" />
          <span className="search-icon">🔍</span>
        </div>
        <div className="entries-control">
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
      <div className="ticket-table">
        <table>
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Action</th>
              <th>Assign to</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketNo}>
                <td>
                  <a href={`#ticket-${ticket.ticketNo}`} className="ticket-link">{ticket.ticketNo}</a>
                </td>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.date}</td>
                <td className="action-icons">
                  <FaCheck className="action-icon" />
                  <FaTimes className="action-icon" />
                </td>
                <td>
                  <div className="assign-dropdown">
                    <span></span>
                    <FaChevronDown className="dropdown-icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <span>Showing 1 to 5 of 5 entries</span>
        <div className="pagination">
          <span>{'≪'}</span>
          <span className="active">1</span>
          <span>{'≫'}</span>
        </div>
      </div>
    </Layout>
  );
}

export default OperationTicketApproval; 