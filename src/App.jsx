import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const [assignments, setAssignments] = useState([
 {
    id: 1,
    title: " Assignment 1",
    subject: "English",
    dueDate: "2026-06-22",
    status: "Pending",
  },
  {
    id: 2,
    title: " Assignment 2",
    subject: "Statistics",
    dueDate: "2026-06-22",
    status: "Not Submitted",
  },
  {
    id: 3,
    title: "Assignment 3",
    subject: "Computer Science",
    dueDate: "2026-06-22",
    status: "Submitted",
  },
  {
    id: 4,
    title: "Assignment 4",
    subject: "EVS",
    dueDate: "2026-06-22",
    status: "Late",
  },
]);
  const [filter, setFilter] = useState("");

  const addAssignment = () => {
    if (!title || !subject || !dueDate) return;

    setAssignments([
      ...assignments,
      {
        id: Date.now(),
        title,
        subject,
        dueDate,
        status,
      },
    ]);

    setTitle("");
    setSubject("");
    setDueDate("");
    setStatus("Pending");
  };

  const filteredAssignments =
    filter === ""
      ? assignments
      : assignments.filter((item) =>
          item.subject.toLowerCase().includes(filter.toLowerCase())
        );

  const submitted = assignments.filter(
    (a) => a.status === "Submitted"
  ).length;

  const pending = assignments.filter(
    (a) => a.status === "Pending"
  ).length;

  const late = assignments.filter(
    (a) => a.status === "Late"
  ).length;

  return (
    <div className="container">
      <h1>Assignment Tracker</h1>

      <div className="project-details">
        <h2>Name: SALEEM </h2>
        <h3>Project: Assignment Tracker</h3>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>Submitted</option>
          <option>Late</option>
        </select>

        <button onClick={addAssignment}>
          Add
        </button>
      </div>

      <div className="dashboard">
        <h3>Submitted: {submitted}</h3>
        <h3>Pending: {pending}</h3>
        <h3>Late: {late}</h3>
      </div>

      <input
        type="text"
        placeholder="Filter by Subject"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredAssignments.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.subject}</td>
              <td>{item.dueDate}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;