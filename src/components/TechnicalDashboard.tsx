import Layout from "./Layout";
import { FaTachometerAlt, FaClipboardList, FaChartLine, FaHeadset, FaUserCog } from "react-icons/fa";
import "./Dashboard.css";

const technicalSidebar = [
  { path: "/technical/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/technical/myticket", icon: <FaClipboardList />, label: "My Ticket" },
  { path: "/technical/performance", icon: <FaChartLine />, label: "Performance" },
];

function TechnicalDashboard() {
  return (
    <Layout sidebarItems={technicalSidebar}>
      <h2 className="main-title">Dashboard</h2>
      <div className="metrics-grid">
        <div className="metric-card blue">
          <h3 className="metric-title">Total Tickets</h3>
          <div className="metric-number">12</div>
        </div>
        <div className="metric-card green">
          <h3 className="metric-title">Total Solved</h3>
          <div className="metric-number">8</div>
        </div>
        <div className="metric-card red">
          <h3 className="metric-title">Total Awaiting Approval</h3>
          <div className="metric-number">2</div>
        </div>
        <div className="metric-card yellow">
          <h3 className="metric-title">Total in Progress</h3>
          <div className="metric-number">2</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '25px', marginTop: '25px', alignItems: 'stretch' }}>
        <div style={{ background: '#55d6c2', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 250 }}>
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0b3556" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="12" width="3" height="8"/><rect x="9" y="8" width="3" height="12"/><rect x="15" y="4" width="3" height="16"/></svg>
        </div>
        <div style={{ background: '#55d6c2', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <FaHeadset size={48} />
              <div style={{ fontSize: 24, fontWeight: 700 }}>3</div>
              <div style={{ fontSize: 18 }}>Technical Supports</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <FaUserCog size={48} />
              <div style={{ fontSize: 24, fontWeight: 700 }}>4</div>
              <div style={{ fontSize: 18 }}>Operation Team</div>
            </div>
          </div>
        </div>
        <div style={{ background: '#55d6c2', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
          <div style={{ fontSize: 24, fontWeight: 500, marginBottom: 8 }}>Customer Feedback</div>
          <div style={{ fontSize: 32, color: '#fff700' }}>
            ★★★★☆
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TechnicalDashboard; 