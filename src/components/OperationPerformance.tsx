import Layout from "./Layout";
import { FaTachometerAlt, FaTicketAlt, FaClipboardList, FaChartLine, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./OperationPerformance.css";

const operationSidebar = [
  { path: "/operation/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/operation/ticket-approval", icon: <FaTicketAlt />, label: "Ticket Approval" },
  { path: "/operation/myticket", icon: <FaClipboardList />, label: "My Ticket" },
  { path: "/operation/performance", icon: <FaChartLine />, label: "Performance" },
];

const mainOperation = {
  name: "Operation Name",
  contact: "0123456789",
  department: "ABC",
  total: 5,
  solved: 2,
  pending: 1,
  inProgress: 2,
  rating: 5,
};

const otherOperations = [
  { name: "Operation Name 1" },
  { name: "Operation Name 2" },
  { name: "Operation Name 3" },
];

function OperationPerformance() {
  const navigate = useNavigate();
  return (
    <Layout sidebarItems={operationSidebar}>
      <h2 className="main-title">Performance</h2>
      <div className="performance-container">
        {/* Left section */}
        <div className="performance-main">
          <div className="main-header">
            <div className="main-avatar">
              <FaUser size={64} />
            </div>
            <div className="main-title-name">{mainOperation.name}</div>
          </div>
          <div className="main-contact">
            <div>Contact No: {mainOperation.contact}</div>
            <div>Department: {mainOperation.department}</div>
          </div>
          <div className="main-tickets">
            <div className="ticket-row ticket-total">
              <span>Total Ticket Handle</span>
              <span>{mainOperation.total}</span>
            </div>
            <div className="ticket-row">
              <span>Ticket Solved</span>
              <span>{mainOperation.solved}</span>
            </div>
            <div className="ticket-row">
              <span>Ticket Pending</span>
              <span>{mainOperation.pending}</span>
            </div>
            <div className="ticket-row">
              <span>Ticket in progress</span>
              <span>{mainOperation.inProgress}</span>
            </div>
            <div className="ticket-row ticket-rating">
              <span>Rating</span>
              <span className="star-rating">{'★★★★★'.slice(0, mainOperation.rating)}</span>
            </div>
          </div>
        </div>
        {/* Right section */}
        <div className="performance-list">
          {otherOperations.map((op) => (
            <div key={op.name} className="performance-list-item">
              <div className="list-avatar">
                <FaUser size={36} />
              </div>
              <div className="list-name">{op.name}</div>
              <button className="view-details-btn" onClick={() => navigate('/operation/profile')}>View details</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default OperationPerformance; 