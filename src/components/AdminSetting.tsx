import Layout from "./Layout";
import { FaTachometerAlt, FaDatabase, FaCog, FaHistory } from "react-icons/fa";
import React, { useState } from "react";
import "./AdminSetting.css";

const adminSidebar = [
  { path: "/admin/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/admin/database", icon: <FaDatabase />, label: "Database" },
  { path: "/admin/setting", icon: <FaCog />, label: "Setting" },
  { path: "/admin/user-log-history", icon: <FaHistory />, label: "User Log History" },
];

type Row = {
  label: string;
  badges?: string[];
  toggle?: boolean;
  switch?: boolean;
};

const sections: { title: string; rows: Row[] }[] = [
  {
    title: "General",
    rows: [
      { label: "Language", badges: ["BM", "BI"] },
      { label: "Data Backup", toggle: true },
    ],
  },
  {
    title: "Connect To",
    rows: [
      { label: "GoDash", toggle: true },
      { label: "SuperController", toggle: true },
    ],
  },
  {
    title: "Email",
    rows: [
      { label: "Enable SMTP", toggle: true },
    ],
  },
  {
    title: "Authorization",
    rows: [
      { label: "Edit authorization", toggle: true },
      { label: "Authority Level", switch: true },
    ],
  },
  {
    title: "Notification",
    rows: [
      { label: "Enable Notification", toggle: true },
    ],
  },
];

function AdminSetting() {
  const [openSections, setOpenSections] = useState(sections.map(() => true));
  const [switchChecked, setSwitchChecked] = useState(false);

  const handleToggleSection = (idx: number) => {
    setOpenSections(openSections => openSections.map((open, i) => i === idx ? !open : open));
  };

  return (
    <Layout sidebarItems={adminSidebar}>
      <h2 className="main-title setting-title">Setting</h2>
      <div className="setting-container">
        {sections.map((section, idx) => (
          <div key={section.title} className="setting-section">
            <div className="setting-section-header" onClick={() => handleToggleSection(idx)}>
              {section.title} <span className="setting-section-arrow">&#x25BC;</span>
            </div>
            {openSections[idx] && (
              <div className="setting-section-body">
                {section.rows.map((row) => (
                  <div key={row.label} className="setting-row">
                    <span>{row.label}</span>
                    {row.badges && (
                      <span className="setting-badges">
                        {row.badges.map((badge: string) => (
                          <span className="setting-badge" key={badge}>{badge}</span>
                        ))}
                      </span>
                    )}
                    {row.toggle && (
                      <input type="checkbox" className="setting-toggle" checked readOnly />
                    )}
                    {row.switch && (
                      <span className="setting-switch" onClick={() => setSwitchChecked(v => !v)}>
                        <input type="checkbox" checked={switchChecked} readOnly />
                        <span className="slider" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default AdminSetting; 