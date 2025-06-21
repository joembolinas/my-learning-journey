import React from 'react';

export const ProgressMeter = ({ 
  value = 0, 
  label = 'Progress', 
  color = 'blue',
  size = 'medium',
  showPercentage = true 
}) => {
  const getColorValue = (color) => {
    const colors = {
      blue: '#3b82f6',
      green: '#10b981',
      purple: '#8b5cf6',
      orange: '#f59e0b',
      red: '#ef4444',
      indigo: '#6366f1'
    };
    return colors[color] || colors.blue;
  };

  const getSizeClass = (size) => {
    const sizes = {
      small: 'progress-small',
      medium: 'progress-medium',
      large: 'progress-large'
    };
    return sizes[size] || sizes.medium;
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className={`progress-meter ${getSizeClass(size)}`}>
      <div className="progress-circle">
        <svg width="120" height="120" className="progress-svg">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke={getColorValue(color)}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="progress-path"
            transform="rotate(-90 60 60)"
          />
        </svg>
        
        <div className="progress-content">
          {showPercentage && (
            <div className="progress-percentage" style={{ color: getColorValue(color) }}>
              {value}%
            </div>
          )}
        </div>
      </div>
      
      <div className="progress-label">{label}</div>
      
      <style jsx>{`
        .progress-meter {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1rem 0;
        }
        
        .progress-circle {
          position: relative;
          display: inline-block;
        }
        
        .progress-svg {
          transform: rotate(0deg);
        }
        
        .progress-path {
          transition: stroke-dashoffset 0.6s ease-in-out;
        }
        
        .progress-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        
        .progress-percentage {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .progress-label {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          text-align: center;
        }
        
        .progress-small .progress-svg {
          width: 80px;
          height: 80px;
        }
        
        .progress-small .progress-percentage {
          font-size: 1rem;
        }
        
        .progress-large .progress-svg {
          width: 160px;
          height: 160px;
        }
        
        .progress-large .progress-percentage {
          font-size: 2rem;
        }
        
        .progress-large .progress-label {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};
