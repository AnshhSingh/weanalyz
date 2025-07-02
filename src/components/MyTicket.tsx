import { useState } from "react";
import Layout from "./Layout";
import "./MyTicket.css";
// import "./MyTicket.css";

function MyTicket() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesCount, setEntriesCount] = useState("10");
  type Ticket = typeof tickets[0];
  const [openTicket, setOpenTicket] = useState<Ticket | null>(null);

  // Sample ticket data
  const tickets = [
    {
      ticketNo: "1234",
      subject: "Login issue",
      status: "In Progress",
      supportBy: "Tech support",
      date: "13/08/21",
      rate: 5,
      name: "",
      dept: "",
      title: "",
      description: "",
      category: "",
      type: "",
      priority: "",
      attachment: ""
    },
    {
      ticketNo: "1124",
      subject: "New ticket issue",
      status: "On hold",
      supportBy: "Operation Team",
      date: "14/08/21",
      rate: 5
    },
    {
      ticketNo: "1224",
      subject: "New request",
      status: "Closed",
      supportBy: "Tech support",
      date: "13/08/21",
      rate: 4.5
    },
    {
      ticketNo: "1244",
      subject: "Ticket submission",
      status: "In Progress",
      supportBy: "Operation Team",
      date: "14/08/21",
      rate: 5
    },
    {
      ticketNo: "1114",
      subject: "Login issue",
      status: "In Progress",
      supportBy: "Tech support",
      date: "3/08/21",
      rate: 5
    }
  ];

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "status-in-progress";
      case "on hold":
        return "status-on-hold";
      case "closed":
        return "status-closed";
      default:
        return "";
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half-filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">★</span>);
      }
    }

    return stars;
  };

  return (
    <Layout>
      <h2 className="main-title">List of Ticket</h2>
      <div className="ticket-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Find ticket"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="entries-control">
          <span>Show:</span>
          <select
            value={entriesCount}
            onChange={(e) => setEntriesCount(e.target.value)}
          >
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
              <th>Status</th>
              <th>Support by</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketNo}>
                <td>
                  <a
                    href="#"
                    className="ticket-link"
                    onClick={e => { e.preventDefault(); setOpenTicket(ticket); }}
                  >
                    {ticket.ticketNo}
                  </a>
                </td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.supportBy}</td>
                <td>{ticket.date}</td>
                <td className="rating">{renderStars(ticket.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <span>Showing 1 to 5 of 5 entries</span>
        <div className="pagination">
          <button disabled>«</button>
          <button className="active">1</button>
          <button disabled>»</button>
        </div>
      </div>
      {openTicket && (
        <div className="ticket-modal-overlay" onClick={() => setOpenTicket(null)}>
          <div className="ticket-modal" onClick={e => e.stopPropagation()}>
            <div className="ticket-modal-title">Ticket Details</div>
            <div className="ticket-modal-content">
              <div>Ticket No: {openTicket.ticketNo}</div>
              <div>Date: {openTicket.date}</div>
              <div>Name: {openTicket.name}</div>
              <div>Dept: {openTicket.dept}</div>
              <br />
              <div>Title: {openTicket.title}</div>
              <div>Description: {openTicket.description}</div>
              <div>Category: {openTicket.category}</div>
              <div>Type: {openTicket.type}</div>
              <div>Priority: {openTicket.priority}</div>
              <div>Status: {openTicket.status}</div>
              <div>Attachment: {openTicket.attachment}</div>
            </div>
            <button className="ticket-modal-close" onClick={() => setOpenTicket(null)}>Close</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default MyTicket;
