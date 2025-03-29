import React, { useState } from 'react';
import './ReportIssue.css'; // Import CSS file for styling

function ReportIssue() {
  const [formData, setFormData] = useState({
    userId: '',
    title: '',
    name: '',
    image: '',
    priority: 'Medium',
    category: '',
    status: 'Open',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Implement API call to submit form data
  };

  return (
    <div className='d-flex justify-content center'>
    <div className="report-issue-container">
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Priority:</label>
        <select name="priority" value={formData.priority} onChange={handleChange} required>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Upload Image:</label>
        <input type="file" name="image" onChange={handleFileChange} accept="image/*" required />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default ReportIssue;
