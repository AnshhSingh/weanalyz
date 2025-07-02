import Layout from "./Layout";
import "./Dashboard.css";
// import "./Dashboard.css";

function Dashboard() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Dashboard;
