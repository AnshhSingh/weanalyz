import { useState } from "react";
import Layout from "./Layout";
import "./NewTicket.css";
import { supabase } from "../supabaseClient";
// import "./NewTicket.css";

function NewTicket() {
  const [formData, setFormData] = useState({
    ticketNo: "",
    date: new Date().toISOString().split("T")[0],
    name: "",
    department: "",
    subject: "",
    category: "general",
    description: "",
    type: "general",
    priority: "medium",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('ticket').insert([formData]);
    if (error) {
      alert('Error creating ticket: ' + error.message);
    } else {
      alert('Ticket created!');
      // Optionally reset form or redirect
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <h2 className="main-title">Create New Ticket</h2>
      <div className="ticket-form-container">
        <form onSubmit={handleSubmit} className="ticket-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ticketNo">Ticket No.</label>
              <input
                type="text"
                id="ticketNo"
                name="ticketNo"
                value={formData.ticketNo}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row full-width">
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="form-layout">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                >
                  <option value="general">General</option>
                  <option value="technical">Technical</option>
                  <option value="billing">Billing</option>
                  <option value="support">Support</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="type">Type:</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                >
                  <option value="general">General</option>
                  <option value="bug">Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="inquiry">Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority:</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="form-right">
              <div className="form-group description-field">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                  rows={7}
                />
              </div>
            </div>
          </div>

          <div className="form-row captcha-row">
            <div className="captcha-box">
              <input type="checkbox" className="captcha-checkbox" id="captcha" />
              <label htmlFor="captcha" className="captcha-label">I'm not a robot</label>
              <div className="captcha-img">
                {/* Placeholder for reCAPTCHA image */}
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" style={{ width: 60, height: 24, marginLeft: 8, marginTop: 4 }} />
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default NewTicket;
