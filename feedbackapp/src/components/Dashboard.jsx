import React, { useState } from 'react';
import { BarChart, PieChart, LineChart } from 'lucide-react';

function Dashboard() {
  const [dateFilter, setDateFilter] = useState('last30days');
  
  // Mock data for dashboard
  const complaintStats = {
    total: 243,
    resolved: 187,
    inProgress: 42,
    pending: 14
  };
  
  const topCategories = [
    { name: 'Potholes', count: 87, color: '#3b82f6' },
    { name: 'Garbage Collection', count: 56, color: '#10b981' },
    { name: 'Streetlights', count: 43, color: '#eab308' },
    { name: 'Water Supply', count: 31, color: '#8b5cf6' },
    { name: 'Sewage Issues', count: 26, color: '#ef4444' }
  ];
  
  const recentComplaints = [
    { id: 'C-2025-0329', category: 'Potholes', location: 'Main St & 5th Ave', status: 'In Progress', date: '29 Mar 2025', priority: 'High' },
    { id: 'C-2025-0328', category: 'Streetlights', location: 'Park Boulevard', status: 'Assigned', date: '28 Mar 2025', priority: 'Medium' },
    { id: 'C-2025-0327', category: 'Garbage Collection', location: 'Riverside Drive', status: 'Resolved', date: '27 Mar 2025', priority: 'Low' },
    { id: 'C-2025-0326', category: 'Water Supply', location: 'Highland Avenue', status: 'In Review', date: '26 Mar 2025', priority: 'High' },
  ];
  
  const departmentPerformance = [
    { name: 'Public Works', avgResolutionTime: '2.3 days', efficiency: 94 },
    { name: 'Sanitation', avgResolutionTime: '1.8 days', efficiency: 97 },
    { name: 'Utilities', avgResolutionTime: '3.5 days', efficiency: 86 },
    { name: 'Parks & Recreation', avgResolutionTime: '4.2 days', efficiency: 82 },
  ];
  
  const getStatusClass = (status) => {
    switch(status) {
      case 'Resolved': return 'status-resolved';
      case 'In Progress': return 'status-in-progress';
      case 'Assigned': return 'status-assigned';
      case 'In Review': return 'status-review';
      default: return 'status-default';
    }
  };
  
  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return 'priority-default';
    }
  };
  
  const getEfficiencyClass = (efficiency) => {
    if (efficiency > 90) return 'progress-high';
    if (efficiency > 80) return 'progress-medium';
    return 'progress-low';
  };
  
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of citizen complaints and municipal performance</p>
      </div>
      
      {/* Filters */}
      <div className="dashboard-filters">
        <div className="filters-group">
          <select 
            className="filter-select"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="thisYear">This Year</option>
          </select>
          
          <select className="filter-select">
            <option value="all">All Categories</option>
            <option value="potholes">Potholes</option>
            <option value="garbage">Garbage Collection</option>
            <option value="streetlights">Streetlights</option>
            <option value="water">Water Supply</option>
          </select>
        </div>
        
        <button className="export-button">
          Export Report
        </button>
      </div>
      
      {/* Stat Cards */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-header">
            <div>
              <p className="stat-label">Total Complaints</p>
              <h2 className="stat-value">{complaintStats.total}</h2>
            </div>
            <div className="stat-icon total-icon">
              <LineChart size={24} />
            </div>
          </div>
          <div className="stat-trend positive">
            <span>↑ 12%</span> from last month
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-header">
            <div>
              <p className="stat-label">Resolved</p>
              <h2 className="stat-value">{complaintStats.resolved}</h2>
            </div>
            <div className="stat-icon resolved-icon">
              <PieChart size={24} />
            </div>
          </div>
          <div className="stat-trend positive">
            <span>↑ 18%</span> resolution rate
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-header">
            <div>
              <p className="stat-label">In Progress</p>
              <h2 className="stat-value">{complaintStats.inProgress}</h2>
            </div>
            <div className="stat-icon in-progress-icon">
              <BarChart size={24} />
            </div>
          </div>
          <div className="stat-trend negative">
            <span>↓ 5%</span> from last week
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-header">
            <div>
              <p className="stat-label">Pending Review</p>
              <h2 className="stat-value">{complaintStats.pending}</h2>
            </div>
            <div className="stat-icon pending-icon">
              <BarChart size={24} />
            </div>
          </div>
          <div className="stat-trend negative">
            <span>↑ 3%</span> from yesterday
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Top Categories */}
        <div className="panel categories-panel">
          <h3 className="panel-title">Top Categories</h3>
          <div className="categories-list">
            {topCategories.map((category, index) => (
              <div key={index} className="category-item">
                <div className="category-bar-container">
                  <div 
                    className="category-bar"
                    style={{ 
                      width: `${(category.count / complaintStats.total) * 100}%`,
                      backgroundColor: category.color 
                    }}
                  ></div>
                </div>
                <div className="category-info">
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">({category.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Complaints */}
        <div className="panel complaints-panel">
          <div className="panel-header">
            <h3 className="panel-title">Recent Complaints</h3>
            <button className="view-all-button">View All</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {recentComplaints.map((complaint, index) => (
                  <tr key={index} className="data-row">
                    <td className="complaint-id">{complaint.id}</td>
                    <td>{complaint.category}</td>
                    <td>{complaint.location}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(complaint.status)}`}>
                        {complaint.status}
                      </span>
                    </td>
                    <td className="date-cell">{complaint.date}</td>
                    <td>
                      <span className={getPriorityClass(complaint.priority)}>
                        {complaint.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Department Performance */}
      <div className="panel performance-panel">
        <h3 className="panel-title">Department Performance</h3>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Avg. Resolution Time</th>
                <th>Efficiency Score</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {departmentPerformance.map((dept, index) => (
                <tr key={index}>
                  <td className="department-name">{dept.name}</td>
                  <td>{dept.avgResolutionTime}</td>
                  <td>{dept.efficiency}%</td>
                  <td>
                    <div className="progress-bar-container">
                      <div 
                        className={`progress-bar ${getEfficiencyClass(dept.efficiency)}`}
                        style={{ width: `${dept.efficiency}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Map Placeholder */}
      
      <style jsx>{`
        /* Dashboard Layout */
        .dashboard {
          padding: 24px;
          background-color: #f9fafb;
          min-height: 100vh;
        }
        
        .dashboard-header {
          margin-bottom: 24px;
        }
        
        .dashboard-header h1 {
          font-size: 24px;
          font-weight: bold;
          color: #1f2937;
          margin: 0 0 4px 0;
        }
        
        .dashboard-header p {
          color: #6b7280;
          margin: 0;
        }
        
        /* Filters */
        .dashboard-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .filters-group {
          display: flex;
          gap: 8px;
        }
        
        .filter-select {
          padding: 8px 16px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          background-color: white;
          color: #374151;
        }
        
        .export-button {
          padding: 8px 16px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .export-button:hover {
          background-color: #1d4ed8;
        }
        
        /* Stat Cards */
        .stat-cards {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }
        
        @media (min-width: 768px) {
          .stat-cards {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .stat-card {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .stat-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .stat-label {
          color: #6b7280;
          font-size: 14px;
          margin: 0 0 4px 0;
        }
        
        .stat-value {
          font-size: 30px;
          font-weight: bold;
          margin: 0;
          color: #1f2937;
        }
        
        .stat-icon {
          padding: 8px;
          border-radius: 6px;
        }
        
        .total-icon {
          background-color: #dbeafe;
          color: #2563eb;
        }
        
        .resolved-icon {
          background-color: #d1fae5;
          color: #10b981;
        }
        
        .in-progress-icon {
          background-color: #fef3c7;
          color: #d97706;
        }
        
        .pending-icon {
          background-color: #fee2e2;
          color: #ef4444;
        }
        
        .stat-trend {
          margin-top: 16px;
          font-size: 14px;
          color: #6b7280;
        }
        
        .stat-trend span {
          font-weight: 600;
        }
        
        .positive span {
          color: #10b981;
        }
        
        .negative span {
          color: #ef4444;
        }
        
        /* Main Content */
        .main-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        
        @media (min-width: 1024px) {
          .main-content {
            grid-template-columns: 1fr 2fr;
          }
        }
        
        /* Panels */
        .panel {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 24px;
        }
        
        .panel-title {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 16px 0;
          color: #1f2937;
        }
        
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .view-all-button {
          color: #2563eb;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }
        
        .view-all-button:hover {
          text-decoration: underline;
        }
        
        /* Categories */
        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .category-item {
          display: flex;
          align-items: center;
        }
        
        .category-bar-container {
          flex-grow: 1;
          height: 16px;
          background-color: #e5e7eb;
          border-radius: 9999px;
          margin-right: 8px;
        }
        
        .category-bar {
          height: 16px;
          border-radius: 9999px;
        }
        
        .category-info {
          min-width: 120px;
          font-size: 14px;
        }
        
        .category-name {
          color: #374151;
        }
        
        .category-count {
          color: #6b7280;
          margin-left: 8px;
        }
        
        /* Tables */
        .table-container {
          overflow-x: auto;
        }
        
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          padding: 12px;
          text-align: left;
          font-size: 12px;
          font-weight: medium;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background-color: #f9fafb;
        }
        
        .data-table td {
          padding: 12px;
          font-size: 14px;
          color: #374151;
          border-top: 1px solid #e5e7eb;
        }
        
        .data-row:hover {
          background-color: #f9fafb;
        }
        
        .complaint-id {
          font-weight: 500;
          color: #2563eb;
        }
        
        .date-cell {
          color: #6b7280;
        }
        
        /* Status Badges */
        .status-badge {
          padding: 4px 8px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
        }
        
        .status-resolved {
          background-color: #d1fae5;
          color: #065f46;
        }
        
        .status-in-progress {
          background-color: #dbeafe;
          color: #1e40af;
        }
        
        .status-assigned {
          background-color: #fef3c7;
          color: #92400e;
        }
        
        .status-review {
          background-color: #ede9fe;
          color: #5b21b6;
        }
        
        .status-default {
          background-color: #f3f4f6;
          color: #374151;
        }
        
        /* Priority Colors */
        .priority-high {
          color: #dc2626;
          font-weight: 500;
        }
        
        .priority-medium {
          color: #d97706;
          font-weight: 500;
        }
        
        .priority-low {
          color: #10b981;
          font-weight: 500;
        }
        
        .priority-default {
          color: #6b7280;
        }
        
        /* Progress Bars */
        .progress-bar-container {
          width: 100%;
          height: 10px;
          background-color: #e5e7eb;
          border-radius: 9999px;
        }
        
        .progress-bar {
          height: 10px;
          border-radius: 9999px;
        }
        
        .progress-high {
          background-color: #10b981;
        }
        
        .progress-medium {
          background-color: #eab308;
        }
        
        .progress-low {
          background-color: #ef4444;
        }
        
        /* Map Section */
        .map-filters {
          display: flex;
          gap: 8px;
        }
        
        .map-filter-button {
          padding: 4px 12px;
          background-color: #f3f4f6;
          border: none;
          border-radius: 6px;
          color: #374151;
          font-size: 14px;
          cursor: pointer;
        }
        
        .map-filter-button:hover {
          background-color: #e5e7eb;
        }
        
        .map-placeholder {
          height: 256px;
          background-color: #f3f4f6;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;