import Layout from "./Layout";
import { FaTachometerAlt, FaClipboardList, FaChartLine, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./OperationPerformance.css";

const technicalSidebar = [
  { path: "/technical/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/technical/myticket", icon: <FaClipboardList />, label: "My Ticket" },
  { path: "/technical/performance", icon: <FaChartLine />, label: "Performance" },
];

const mainOperation = {
  name: "Technical Name",
  contact: "0123456789",
  department: "Tech Dept",
  total: 5,
  solved: 2,
  pending: 1,
  inProgress: 2,
  rating: 5,
};

const otherOperations = [
  { name: "Technical Name 1" },
  { name: "Technical Name 2" },
  { name: "Technical Name 3" },
];

function TechnicalPerformance() {
  const navigate = useNavigate();
  return (
    <Layout sidebarItems={technicalSidebar}>
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
              <button className="view-details-btn" onClick={() => navigate('/technical/profile')}>View details</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default TechnicalPerformance; 