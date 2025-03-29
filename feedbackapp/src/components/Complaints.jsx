import React, { useState } from 'react';
import './Complaints.css'; // Import CSS file for styling

function Complaints() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    officialName: '',
    complaint: '',
    evidence: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, evidence: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Complaint Submitted:', formData);
    // Implement API call to submit complaint data
  };

  return (
    <div className="complaints-container">
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />

        <label>Your Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />

        <label>Official's Name:</label>
        <input type="text" name="officialName" value={formData.officialName} onChange={handleChange} required placeholder="Enter official's name" />

        <label>Complaint Details:</label>
        <textarea name="complaint" value={formData.complaint} onChange={handleChange} required placeholder="Describe your complaint" rows="5"></textarea>

        <label>Upload Evidence (Optional):</label>
        <input type="file" name="evidence" onChange={handleFileChange} accept="image/*,video/*,application/pdf" />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default Complaints;
