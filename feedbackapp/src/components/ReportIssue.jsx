import React, { useState } from 'react';
import axios from 'axios';
import './ReportIssue.css'; // Import CSS file for styling

function ReportIssue() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
  });
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('name', 'Anonymous');
      formDataToSend.append('category', formData.category);
      formDataToSend.append('address', formData.location);
      formDataToSend.append('priority', 'Medium');

      // Append the first image file if it exists
      if (uploadedImages.length > 0) {
        formDataToSend.append('image', uploadedImages[0]);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/post/create`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data) {
        alert('Issue reported successfully!');
        setFormData({
          title: '',
          description: '',
          location: '',
          category: '',
        });
        setUploadedImages([]);
      }
    } catch (error) {
      console.error('Error details:', error);
      console.error('Response data:', error.response?.data);
      alert('Failed to report issue. Please try again.');
    }
  };

  return (
    <div className="report-issue-wrapper">
      <div className="report-issue-container">
        <h2 className="form-title">Report an Issue</h2>
        <form onSubmit={handleSubmit} className="report-form">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Title of the issue"
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe the issue"
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter the location"
          />

          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            placeholder="Issue category"
          />

          <label>Upload Images:</label>
          <input
            type="file"
            name="images"
            onChange={handleFileChange}
            accept="image/*"
            multiple
          />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReportIssue;