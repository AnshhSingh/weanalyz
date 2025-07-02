import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MyTicket from "./components/MyTicket";
import NewTicket from "./components/NewTicket";
import OperationDashboard from "./components/OperationDashboard";
import OperationTicketApproval from "./components/OperationTicketApproval";
import OperationMyTicket from "./components/OperationMyTicket";
import OperationPerformance from "./components/OperationPerformance";
import TechnicalDashboard from "./components/TechnicalDashboard";
import TechnicalMyTicket from "./components/TechnicalMyTicket";
import TechnicalPerformance from "./components/TechnicalPerformance";
import UserProfile from "./components/UserProfile";
import AdminDashboard from "./components/AdminDashboard";
import AdminUserDatabase from "./components/AdminUserDatabase";
// import AdminTicketDatabase from "./components/AdminTicketDatabase";
import AdminUserLogHistory from "./components/AdminUserLogHistory";
import AdminSetting from "./components/AdminSetting";
import AdminUserProfile from "./components/AdminUserProfile";
import OrganizerUserProfile from "./components/OrganizerUserProfile";
import TechnicalUserProfile from "./components/TechnicalUserProfile";
import EditProfile from "./components/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

function App() {
  const adminSidebar = [
    { path: "/admin/dashboard", icon: <img src="/dashboardicon.png" alt="Dashboard" style={{width: 24, height: 24}} />, label: "Dashboard" },
    { path: "/admin/database", icon: <img src="/databaseicon.png" alt="Database" style={{width: 24, height: 24}} />, label: "Database", dropdownItems: [
      { label: "User Database", path: "/admin/database/user" },
      { label: "Ticket Database", path: "/admin/database/ticket" },
    ] },
    { path: "/admin/setting", icon: <img src="/settingicon.png" alt="Setting" style={{width: 24, height: 24}} />, label: "Setting" },
    { path: "/admin/user-log-history", icon: <img src="/userlogicon.png" alt="User Log History" style={{width: 24, height: 24}} />, label: "User Log History" },
  ];
  const organizerSidebar = [
    { path: "/operation/dashboard", icon: <img src="/dashboardicon.png" alt="Dashboard" style={{width: 24, height: 24}} />, label: "Dashboard" },
    { path: "/operation/ticket-approval", icon: <img src="/ticketapprovalicon.png" alt="Ticket Approval" style={{width: 24, height: 24}} />, label: "Ticket Approval" },
    { path: "/operation/myticket", icon: <img src="/myticketicon.png" alt="My Ticket" style={{width: 24, height: 24}} />, label: "My Ticket" },
    { path: "/operation/performance", icon: <img src="/performanceicon.png" alt="Performance" style={{width: 24, height: 24}} />, label: "Performance" },
  ];
  const technicalSidebar = [
    { path: "/technical/dashboard", icon: <img src="/dashboardicon.png" alt="Dashboard" style={{width: 24, height: 24}} />, label: "Dashboard" },
    { path: "/technical/myticket", icon: <img src="/myticketicon.png" alt="My Ticket" style={{width: 24, height: 24}} />, label: "My Ticket" },
    { path: "/technical/performance", icon: <img src="/performanceicon.png" alt="Performance" style={{width: 24, height: 24}} />, label: "Performance" },
  ];
  const userSidebar = [
    { path: "/dashboard", icon: <img src="/dashboardicon.png" alt="Dashboard" style={{width: 24, height: 24}} />, label: "Dashboard" },
    { path: "/newticket", icon: <img src="/newticketicon.png" alt="New Ticket" style={{width: 24, height: 24}} />, label: "New Ticket" },
    { path: "/myticket", icon: <img src="/myticketicon.png" alt="My Ticket" style={{width: 24, height: 24}} />, label: "My Ticket" },
  ];

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={
        <ProtectedRoute allowedRoles={["user"]}>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/newticket" element={
        <ProtectedRoute allowedRoles={["user"]}>
          <NewTicket />
        </ProtectedRoute>
      } />
      <Route path="/myticket" element={
        <ProtectedRoute allowedRoles={["user"]}>
          <MyTicket />
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute allowedRoles={["user"]}>
          <UserProfile />
        </ProtectedRoute>
      } />
      <Route path="/profile/edit" element={
        <ProtectedRoute allowedRoles={["user"]}>
          <EditProfile sidebarItems={userSidebar} />
        </ProtectedRoute>
      } />
      <Route path="/operation/dashboard" element={
        <ProtectedRoute allowedRoles={["operation"]}>
          <OperationDashboard />
        </ProtectedRoute>
      } />
      <Route path="/operation/ticket-approval" element={
        <ProtectedRoute allowedRoles={["operation"]}>
          <OperationTicketApproval />
        </ProtectedRoute>
      } />
      <Route path="/operation/myticket" element={
        <ProtectedRoute allowedRoles={["operation"]}>
          <OperationMyTicket />
        </ProtectedRoute>
      } />
      <Route path="/operation/performance" element={
        <ProtectedRoute allowedRoles={["operation"]}>
          <OperationPerformance />
        </ProtectedRoute>
      } />
      <Route path="/operation/profile" element={
        <ProtectedRoute allowedRoles={["operation"]}>
          <OrganizerUserProfile />
        </ProtectedRoute>
      } />
      <Route path="/operation/profile/edit" element={
        <ProtectedRoute allowedRoles={["operation"]}>
          <EditProfile sidebarItems={organizerSidebar} />
        </ProtectedRoute>
      } />
      <Route path="/technical/dashboard" element={
        <ProtectedRoute allowedRoles={["technical"]}>
          <TechnicalDashboard />
        </ProtectedRoute>
      } />
      <Route path="/technical/myticket" element={
        <ProtectedRoute allowedRoles={["technical"]}>
          <TechnicalMyTicket />
        </ProtectedRoute>
      } />
      <Route path="/technical/performance" element={
        <ProtectedRoute allowedRoles={["technical"]}>
          <TechnicalPerformance />
        </ProtectedRoute>
      } />
      <Route path="/technical/profile" element={
        <ProtectedRoute allowedRoles={["technical"]}>
          <TechnicalUserProfile />
        </ProtectedRoute>
      } />
      <Route path="/technical/profile/edit" element={
        <ProtectedRoute allowedRoles={["technical"]}>
          <EditProfile sidebarItems={technicalSidebar} />
        </ProtectedRoute>
      } />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin/database/user" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminUserDatabase />
        </ProtectedRoute>
      } />
      <Route path="/admin/setting" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminSetting />
        </ProtectedRoute>
      } />
      <Route path="/admin/user-log-history" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminUserLogHistory />
        </ProtectedRoute>
      } />
      <Route path="/admin/profile" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminUserProfile />
        </ProtectedRoute>
      } />
      <Route path="/admin/profile/edit" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <EditProfile sidebarItems={adminSidebar} />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
