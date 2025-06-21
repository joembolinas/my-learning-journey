import React from 'react';

export const NavigationCard = ({ 
  title, 
  description, 
  link, 
  priority = 'medium', 
  icon = null,
  external = false 
}) => {
  const getPriorityColor = (priority) => {
    const colors = {
      high: '#ef4444',
      medium: '#f59e0b',
      low: '#6b7280'
    };
    return colors[priority] || colors.medium;
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      high: '🔥',
      medium: '⭐',
      low: '📝'
    };
    return icons[priority] || icons.medium;
  };

  return (
    <div className="navigation-card">
      <div className="card-header">
        <div className="card-icon">
          {icon || getPriorityIcon(priority)}
        </div>
        <div 
          className="priority-badge"
          style={{ backgroundColor: getPriorityColor(priority) }}
        >
          {priority}
        </div>
      </div>
      
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
      
      <div className="card-footer">
        <a 
          href={link} 
          className="card-link"
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer' : ''}
        >
          View {external && '↗'}
        </a>
      </div>
      
      <style jsx>{`
        .navigation-card {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .navigation-card:hover {
          border-color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .card-icon {
          font-size: 1.5rem;
        }
        
        .priority-badge {
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .card-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.75rem 0;
        }
        
        .card-description {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
          flex-grow: 1;
        }
        
        .card-footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }
        
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }
        
        .card-link:hover {
          color: #1d4ed8;
        }
        
        @media (max-width: 768px) {
          .navigation-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
