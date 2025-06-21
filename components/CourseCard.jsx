import React from 'react';

export const CourseCard = ({ 
  code, 
  name, 
  focusAreas = [], 
  status = 'developing', 
  progress = 0, 
  portfolioItems = 0, 
  assignments = 0 
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'developing': return '#f59e0b';
      case 'planning': return '#6b7280';
      default: return '#f59e0b';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'developing': return '🔄';
      case 'planning': return '📋';
      default: return '🔄';
    }
  };

  return (
    <div className="course-card">
      <div className="course-header">
        <div className="course-code">{code}</div>
        <div 
          className="course-status"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {getStatusIcon(status)} {status}
        </div>
      </div>
      
      <h3 className="course-name">{name}</h3>
      
      <div className="progress-section">
        <div className="progress-label">Progress: {progress}%</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${progress}%`,
              backgroundColor: getStatusColor(status)
            }}
          />
        </div>
      </div>
      
      <div className="focus-areas">
        <h4>Focus Areas:</h4>
        <ul>
          {focusAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      
      <div className="course-stats">
        <div className="stat">
          <span className="stat-icon">📝</span>
          <span className="stat-value">{assignments}</span>
          <span className="stat-label">Assignments</span>
        </div>
        <div className="stat">
          <span className="stat-icon">💼</span>
          <span className="stat-value">{portfolioItems}</span>
          <span className="stat-label">Portfolio Items</span>
        </div>
      </div>
      
      <style jsx>{`
        .course-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          border-color: #3b82f6;
        }
        
        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .course-code {
          font-weight: 700;
          font-size: 1.125rem;
          color: #1f2937;
          background: #f3f4f6;
          padding: 0.5rem 1rem;
          border-radius: 6px;
        }
        
        .course-status {
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: capitalize;
        }
        
        .course-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        
        .progress-section {
          margin-bottom: 1.5rem;
        }
        
        .progress-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        
        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          transition: width 0.3s ease;
          border-radius: 4px;
        }
        
        .focus-areas h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        
        .focus-areas ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }
        
        .focus-areas li {
          padding: 0.25rem 0;
          color: #6b7280;
          font-size: 0.875rem;
          position: relative;
          padding-left: 1rem;
        }
        
        .focus-areas li:before {
          content: "•";
          color: #3b82f6;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        
        .course-stats {
          display: flex;
          justify-content: space-around;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .stat-icon {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
};
