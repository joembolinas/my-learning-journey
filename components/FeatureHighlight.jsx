import React from 'react';

export const FeatureHighlight = ({ 
  title, 
  description, 
  features = [], 
  variant = 'default',
  icon = null 
}) => {
  const getVariantClass = (variant) => {
    const variants = {
      default: 'feature-default',
      primary: 'feature-primary',
      secondary: 'feature-secondary',
      success: 'feature-success',
      warning: 'feature-warning'
    };
    return variants[variant] || variants.default;
  };

  return (
    <div className={`feature-highlight ${getVariantClass(variant)}`}>
      <div className="feature-header">
        {icon && <div className="feature-icon">{icon}</div>}
        <h3 className="feature-title">{title}</h3>
      </div>
      
      {description && (
        <p className="feature-description">{description}</p>
      )}
      
      {features.length > 0 && (
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-check">✓</span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      <style jsx>{`
        .feature-highlight {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-left: 4px solid #3b82f6;
        }
        
        .feature-primary {
          border-left-color: #3b82f6;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        }
        
        .feature-secondary {
          border-left-color: #6b7280;
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
        }
        
        .feature-success {
          border-left-color: #10b981;
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
        }
        
        .feature-warning {
          border-left-color: #f59e0b;
          background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
        }
        
        .feature-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .feature-icon {
          font-size: 2rem;
          margin-right: 1rem;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        
        .feature-description {
          font-size: 1.125rem;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .feature-list {
          display: grid;
          gap: 0.75rem;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        
        .feature-check {
          color: #10b981;
          font-weight: 700;
          font-size: 1.125rem;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }
        
        .feature-text {
          color: #374151;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .feature-highlight {
            padding: 1.5rem;
          }
          
          .feature-title {
            font-size: 1.25rem;
          }
          
          .feature-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
