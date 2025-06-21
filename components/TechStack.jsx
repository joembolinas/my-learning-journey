import React from 'react';

export const TechStack = ({ technologies = [] }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Automation': '#f59e0b',
      'Backend': '#10b981',
      'AI': '#8b5cf6',
      'Development': '#3b82f6',
      'Documentation': '#6b7280',
      'Version Control': '#ef4444',
      'Data': '#06b6d4',
      'Visualization': '#84cc16'
    };
    return colors[category] || '#6b7280';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Automation': '⚡',
      'Backend': '⚙️',
      'AI': '🤖',
      'Development': '💻',
      'Documentation': '📚',
      'Version Control': '📋',
      'Data': '📊',
      'Visualization': '📈'
    };
    return icons[category] || '🔧';
  };

  // Group technologies by category
  const groupedTechnologies = technologies.reduce((groups, tech) => {
    const category = tech.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(tech);
    return groups;
  }, {});

  return (
    <div className="tech-stack">
      <div className="tech-header">
        <h3>🛠️ Technology Stack & Tools</h3>
        <p>Comprehensive toolkit for academic and professional development</p>
      </div>
      
      <div className="tech-categories">
        {Object.entries(groupedTechnologies).map(([category, techs]) => (
          <div key={category} className="tech-category">
            <div 
              className="category-header"
              style={{ borderLeftColor: getCategoryColor(category) }}
            >
              <span className="category-icon">{getCategoryIcon(category)}</span>
              <h4 className="category-title">{category}</h4>
              <span className="tech-count">{techs.length}</span>
            </div>
            
            <div className="tech-list">
              {techs.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-item-header">
                    <h5 className="tech-name">{tech.name}</h5>
                    <div 
                      className="tech-badge"
                      style={{ backgroundColor: getCategoryColor(category) }}
                    >
                      {category}
                    </div>
                  </div>
                  <p className="tech-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="tech-summary">
        <div className="summary-stat">
          <span className="stat-number">{technologies.length}</span>
          <span className="stat-label">Technologies</span>
        </div>
        <div className="summary-stat">
          <span className="stat-number">{Object.keys(groupedTechnologies).length}</span>
          <span className="stat-label">Categories</span>
        </div>
        <div className="summary-stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Integration</span>
        </div>
      </div>
      
      <style jsx>{`
        .tech-stack {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          border: 2px solid #e5e7eb;
        }
        
        .tech-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .tech-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
        }
        
        .tech-header p {
          color: #6b7280;
          margin: 0;
        }
        
        .tech-categories {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .tech-category {
          background: #f9fafb;
          border-radius: 8px;
          padding: 1.5rem;
        }
        
        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: white;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
        }
        
        .category-icon {
          font-size: 1.5rem;
        }
        
        .category-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
          flex-grow: 1;
        }
        
        .tech-count {
          background: #e5e7eb;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .tech-list {
          display: grid;
          gap: 1rem;
        }
        
        .tech-item {
          background: white;
          border-radius: 6px;
          padding: 1rem;
          border: 1px solid #e5e7eb;
        }
        
        .tech-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .tech-name {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }
        
        .tech-badge {
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .tech-description {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.4;
        }
        
        .tech-summary {
          display: flex;
          justify-content: center;
          gap: 3rem;
          padding: 2rem;
          background: #f9fafb;
          border-radius: 8px;
          border-top: 3px solid #3b82f6;
        }
        
        .summary-stat {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
        }
        
        .stat-label {
          display: block;
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        @media (max-width: 768px) {
          .tech-stack {
            padding: 1.5rem;
          }
          
          .tech-summary {
            gap: 2rem;
          }
          
          .category-header {
            flex-wrap: wrap;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};
