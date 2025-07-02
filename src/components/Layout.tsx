import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Layout.css";

interface SidebarItem {
  path: string;
  icon: React.ReactNode;
  label: string;
  dropdownItems?: { label: string; path: string }[];
}

interface LayoutProps {
  children: React.ReactNode;
  sidebarItems?: SidebarItem[];
}

const defaultSidebarItems: SidebarItem[] = [
  { path: "/dashboard", icon: <img src="/dashboardicon.png" alt="Dashboard" style={{width: 24, height: 24}} />, label: "Dashboard" },
  { path: "/newticket", icon: <img src="/newticketicon.png" alt="New Ticket" style={{width: 24, height: 24}} />, label: "New Ticket" },
  { path: "/myticket", icon: <img src="/myticketicon.png" alt="My Ticket" style={{width: 24, height: 24}} />, label: "My Ticket" },
];

const Layout: React.FC<LayoutProps> = ({ children, sidebarItems }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const items = sidebarItems || defaultSidebarItems;
  const [dbDropdownOpen, setDbDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  // Only for admin sidebar: find the Database item
  const isAdminSidebar = items.some(i => i.label === "Database");

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="helpdesk-title">Helpdesk</h1>
          <div className="header-icons">
            <div className="notification-badge">
              <span className="badge-text">
                <svg width="75" height="27" viewBox="0 0 75 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.5 25.3125V1.6875H65.625C66.8682 1.6875 68.0605 1.86529 68.9396 2.18176C69.8186 2.49822 70.3125 2.92745 70.3125 3.375V23.625C70.3125 24.0726 69.8186 24.5018 68.9396 24.8182C68.0605 25.1347 66.8682 25.3125 65.625 25.3125H37.5ZM65.625 27C68.1114 27 70.496 26.6444 72.2541 26.0115C74.0123 25.3785 75 24.5201 75 23.625V3.375C75 2.47989 74.0123 1.62145 72.2541 0.988515C70.496 0.355579 68.1114 0 65.625 0L9.375 0C6.8886 0 4.50403 0.355579 2.74587 0.988515C0.987721 1.62145 0 2.47989 0 3.375L0 23.625C0 24.5201 0.987721 25.3785 2.74587 26.0115C4.50403 26.6444 6.8886 27 9.375 27H65.625Z" fill="black"/>
                  <path d="M10.7617 19V10.4688H13.75C14.7852 10.4688 15.5703 10.668 16.1055 11.0664C16.6406 11.4609 16.9082 12.041 16.9082 12.8066C16.9082 13.2246 16.8008 13.5938 16.5859 13.9141C16.3711 14.2305 16.0723 14.4629 15.6895 14.6113C16.127 14.7207 16.4707 14.9414 16.7207 15.2734C16.9746 15.6055 17.1016 16.0117 17.1016 16.4922C17.1016 17.3125 16.8398 17.9336 16.3164 18.3555C15.793 18.7773 15.0469 18.9922 14.0781 19H10.7617ZM12.5195 15.2852V17.5879H14.0254C14.4395 17.5879 14.7617 17.4902 14.9922 17.2949C15.2266 17.0957 15.3438 16.8223 15.3438 16.4746C15.3438 15.6934 14.9395 15.2969 14.1309 15.2852H12.5195ZM12.5195 14.043H13.8203C14.707 14.0273 15.1504 13.6738 15.1504 12.9824C15.1504 12.5957 15.0371 12.3184 14.8105 12.1504C14.5879 11.9785 14.2344 11.8926 13.75 11.8926H12.5195V14.043ZM20.7227 10.4688L22.9141 16.6562L25.0938 10.4688H27.4023V19H25.6387V16.668L25.8145 12.6426L23.5117 19H22.3047L20.0078 12.6484L20.1836 16.668V19H18.4258V10.4688H20.7227Z" fill="white"/>
                  <path d="M46.7617 19V10.4688H49.75C50.7852 10.4688 51.5703 10.668 52.1055 11.0664C52.6406 11.4609 52.9082 12.041 52.9082 12.8066C52.9082 13.2246 52.8008 13.5938 52.5859 13.9141C52.3711 14.2305 52.0723 14.4629 51.6895 14.6113C52.127 14.7207 52.4707 14.9414 52.7207 15.2734C52.9746 15.6055 53.1016 16.0117 53.1016 16.4922C53.1016 17.3125 52.8398 17.9336 52.3164 18.3555C51.793 18.7773 51.0469 18.9922 50.0781 19H46.7617ZM48.5195 15.2852V17.5879H50.0254C50.4395 17.5879 50.7617 17.4902 50.9922 17.2949C51.2266 17.0957 51.3438 16.8223 51.3438 16.4746C51.3438 15.6934 50.9395 15.2969 50.1309 15.2852H48.5195ZM48.5195 14.043H49.8203C50.707 14.0273 51.1504 13.6738 51.1504 12.9824C51.1504 12.5957 51.0371 12.3184 50.8105 12.1504C50.5879 11.9785 50.2344 11.8926 49.75 11.8926H48.5195V14.043ZM56.2949 19H54.5371V10.4688H56.2949V19Z" fill="black"/>
                </svg>
              </span>
            </div>
            <div className="notification-icon">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 28c1.892 0 3.427-1.567 3.427-3.5H8.573c0 1.933 1.535 3.5 3.427 3.5m11.539-8.187c-1.035-1.136-2.972-2.843-2.972-8.438 0-4.25-2.918-7.65-6.854-8.485V1.75C13.713.784 12.946 0 12 0s-1.713.784-1.713 1.75v1.14c-3.936.834-6.854 4.236-6.854 8.485 0 5.595-1.937 7.302-2.972 8.438A1.73 1.73 0 0 0 0 21c.006.897.695 1.75 1.72 1.75h20.56c1.025 0 1.715-.853 1.72-1.75a1.73 1.73 0 0 0-.461-1.187" fill="#000"/></svg>
            </div>
            <div className="user-icon" style={{ cursor: 'pointer' }} onClick={() => {
              let profileUrl = '/profile';
              if (location.pathname.startsWith('/admin')) profileUrl = '/admin/profile';
              else if (location.pathname.startsWith('/operation')) profileUrl = '/operation/profile';
              else if (location.pathname.startsWith('/technical')) profileUrl = '/technical/profile';
              navigate(profileUrl);
            }}>
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 28s-2 0-2-2.333 2-9.334 12-9.334 12 7 12 9.334S22 28 22 28zm10-14c1.591 0 3.117-.738 4.243-2.05C17.368 10.637 18 8.857 18 7s-.632-3.637-1.757-4.95S13.59 0 12 0 8.883.737 7.757 2.05C6.632 3.363 6 5.143 6 7s.632 3.637 1.757 4.95S10.41 14 12 14" fill="#000"/></svg>
            </div>
            <div className="logout-icon" onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m26.626 13.606-9 10.936c-.804.976-2.197.292-2.197-1.107v-6.249H8.143c-.712 0-1.286-.697-1.286-1.562v-6.25c0-.865.574-1.561 1.286-1.561h7.286v-6.25c0-1.392 1.388-2.082 2.197-1.106l9 10.936c.499.612.499 1.601 0 2.213m-16.34 10.61v-2.604c0-.43-.29-.78-.643-.78h-4.5c-.948 0-1.714-.932-1.714-2.084V6.25c0-1.152.766-2.083 1.714-2.083h4.5c.354 0 .643-.351.643-.78V.782c0-.43-.29-.782-.643-.782h-4.5C2.303.001 0 2.801 0 6.251v12.497c0 3.45 2.304 6.25 5.143 6.25h4.5c.354 0 .643-.352.643-.782" fill="#000"/></svg>
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {items.map((item) => {
              if (isAdminSidebar && item.label === "Database") {
                // Admin Database tab with dropdown
                return (
                  <div key={item.path}>
                    <div
                      className={`nav-item${location.pathname.startsWith("/admin/database") ? " active" : ""}`}
                      onClick={() => setDbDropdownOpen((open) => !open)}
                      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <div className="nav-icon">{item.icon}</div>
                      <span className="nav-text">{item.label}</span>
                      <span style={{ marginLeft: 'auto', fontSize: 16 }}>{dbDropdownOpen ? "▲" : "▼"}</span>
                    </div>
                    {dbDropdownOpen && (
                      <div className="sidebar-dropdown">
                        <div
                          className={`dropdown-item${location.pathname === "/admin/database/user" ? " active" : ""}`}
                          onClick={() => navigate("/admin/database/user")}
                        >
                          User Database
                        </div>
                        <div
                          className={`dropdown-item${location.pathname === "/admin/database/ticket" ? " active" : ""}`}
                          onClick={() => navigate("/admin/database/ticket")}
                        >
                          Ticket Database
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <div
                  key={item.path}
                  className={`nav-item${location.pathname === item.path ? " active" : ""}`}
                  onClick={() => navigate(item.path)}
                >
                  {location.pathname === item.path && <span className="nav-arrow">▶</span>}
                  <div className="nav-icon">{item.icon}</div>
                  <span className="nav-text">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </aside>
        <main className="main-content">{children}</main>
      </div>

      <footer className="dashboard-footer">
        <div className="footer-content">Footer Area</div>
      </footer>
    </div>
  );
};

export default Layout;
