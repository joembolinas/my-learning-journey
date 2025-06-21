import React from 'react';

export const Timeline = ({ steps = [] }) => {
  const formatDuration = (duration) => {
    return duration || 'Variable';
  };

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h3>🚀 Setup Timeline</h3>
        <p>Step-by-step initialization process</p>
      </div>
      
      <div className="timeline-container">
        {steps.map((step, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-circle">
                <span className="step-number">{index + 1}</span>
              </div>
              {index < steps.length - 1 && <div className="marker-line" />}
            </div>
            
            <div className="timeline-content">
              <div className="step-header">
                <h4 className="step-title">{step.title}</h4>
                <div className="step-duration">
                  <span className="duration-icon">⏱️</span>
                  <span className="duration-text">{formatDuration(step.duration)}</span>
                </div>
              </div>
              
              <p className="step-description">{step.description}</p>
              
              {step.commands && step.commands.length > 0 && (
                <div className="step-commands">
                  <h5>Commands:</h5>
                  <ul className="commands-list">
                    {step.commands.map((command, cmdIndex) => (
                      <li key={cmdIndex} className="command-item">
                        <code>{command}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="timeline-summary">
        <div className="summary-item">
          <span className="summary-icon">📋</span>
          <span className="summary-text">{steps.length} Steps</span>
        </div>
        <div className="summary-item">
          <span className="summary-icon">⏱️</span>
          <span className="summary-text">~1 Hour Total</span>
        </div>
        <div className="summary-item">
          <span className="summary-icon">🎯</span>
          <span className="summary-text">Complete Setup</span>
        </div>
      </div>
      
      <style jsx>{`
        .timeline {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          border: 2px solid #e5e7eb;
        }
        
        .timeline-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .timeline-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
        }
        
        .timeline-header p {
          color: #6b7280;
          margin: 0;
        }
        
        .timeline-container {
          position: relative;
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2rem;
          flex-shrink: 0;
        }
        
        .marker-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        
        .step-number {
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
        }
        
        .marker-line {
          width: 3px;
          height: 60px;
          background: #e5e7eb;
          margin-top: 0.5rem;
        }
        
        .timeline-content {
          flex: 1;
          background: #f9fafb;
          border-radius: 8px;
          padding: 1.5rem;
          border-left: 4px solid #3b82f6;
        }
        
        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }
        
        .step-duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
        }
        
        .duration-icon {
          font-size: 0.875rem;
        }
        
        .duration-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }
        
        .step-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .step-commands h5 {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 0.75rem 0;
        }
        
        .commands-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .command-item {
          margin-bottom: 0.5rem;
        }
        
        .command-item code {
          background: #1f2937;
          color: #10b981;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          display: block;
          overflow-x: auto;
        }
        
        .timeline-summary {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          padding: 1.5rem;
          background: #f9fafb;
          border-radius: 8px;
          border-top: 3px solid #3b82f6;
        }
        
        .summary-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .summary-icon {
          font-size: 1.25rem;
        }
        
        .summary-text {
          font-weight: 600;
          color: #374151;
        }
        
        @media (max-width: 768px) {
          .timeline {
            padding: 1.5rem;
          }
          
          .timeline-marker {
            margin-right: 1rem;
          }
          
          .marker-circle {
            width: 40px;
            height: 40px;
          }
          
          .step-number {
            font-size: 1rem;
          }
          
          .step-header {
            flex-direction: column;
            gap: 1rem;
          }
          
          .timeline-summary {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
