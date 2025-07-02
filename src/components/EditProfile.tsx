import React from "react";
import Layout from "./Layout";
import "./UserProfile.css";

interface SidebarItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

interface EditProfileProps {
  sidebarItems?: SidebarItem[];
}

const formFields = [
  { label: "Username", type: "text", name: "username" },
  { label: "Current Password", type: "password", name: "currentPassword" },
  { label: "New Password", type: "password", name: "newPassword" },
  { label: "Comfirm Password", type: "password", name: "confirmPassword" },
  { label: "Email", type: "email", name: "email" },
  { label: "Real Name", type: "text", name: "realName" },
  { label: "Access Level", type: "text", name: "accessLevel" },
  { label: "Project Access Level", type: "text", name: "projectAccessLevel" },
];

function EditProfile({ sidebarItems }: EditProfileProps) {
  return (
    <Layout sidebarItems={sidebarItems}>
      <div style={{ padding: 32 }}>
        <h2 className="main-title" style={{ textAlign: "left", marginBottom: 24 }}>User Profile</h2>
        <div style={{ background: "#fff", borderRadius: 8, padding: 0, minWidth: 600, maxWidth: 800 }}>
          <div style={{ display: "flex", borderBottom: "2px solid #e0e0e0" }}>
            <div style={{ background: "#3ed6c2", color: "#222", fontWeight: 500, padding: "12px 32px", borderTopLeftRadius: 8, borderTopRightRadius: 8, fontSize: 18 }}>Edit Account</div>
          </div>
          <form style={{ padding: 24, background: "#f4f4f4" }}>
            {formFields.map((field) => (
              <div key={field.name} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                <div style={{ width: 220, background: "#999", color: "#fff", padding: "10px 16px", fontWeight: 500, fontSize: 16, borderRadius: 2 }}>{field.label}</div>
                <input
                  type={field.type}
                  name={field.name}
                  style={{ flex: 1, padding: "10px 12px", fontSize: 16, border: "none", outline: "none", background: "#eee", borderRadius: 0, marginLeft: 4 }}
                />
              </div>
            ))}
            <div style={{ display: "flex", marginTop: 18 }}>
              <button type="submit" style={{ background: "#3ed6c2", color: "#222", border: "none", borderRadius: 6, fontSize: 18, fontWeight: 500, padding: "10px 32px", cursor: "pointer", marginRight: 8 }}>Update User</button>
              <div style={{ flex: 1, background: "#bbb", borderRadius: 2 }}></div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default EditProfile; 