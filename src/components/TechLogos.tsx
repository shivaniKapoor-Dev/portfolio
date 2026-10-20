import React from 'react';

export const HtmlLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#E44D26"/>
    <path d="M12 3.8V20.1L16.8 18.8L18.3 3.8H12Z" fill="#F16529"/>
    <path d="M8.5 7.4H15.5L15.2 10.3H12V12.4H15L14.6 16.4L12 17.1V19.2L16.4 18L17 12.4L17.2 9.5H12V7.4H8.5V7.4Z" fill="white"/>
    <path d="M8.5 7.4H12V9.5H10.1L10.3 11.6H12V13.7H10.5L10.7 16.3L12 16.7V18.8L9.6 18.2L9.1 13.7H7.1L7.8 7.4H8.5Z" fill="#EBEBEB"/>
  </svg>
);

export const CssLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#1572B6"/>
    <path d="M12 3.8V20.1L16.8 18.8L18.3 3.8H12Z" fill="#33A9DC"/>
    <path d="M8.5 7.4H15.5L15.3 9.5H12V11.6H15.1L14.6 16.4L12 17.1V19.2L16.4 18L17 11.6L17.2 7.4H12V7.4H8.5Z" fill="white"/>
    <path d="M8.5 7.4H12V9.5H10.1L10.3 11.6H12V13.7H10.5L10.7 16.3L12 16.7V18.8L9.6 18.2L9.1 13.7H7.1L7.8 7.4H8.5Z" fill="#EBEBEB"/>
  </svg>
);

export const JsLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M7 16.8C7.5 17.6 8.4 18.1 9.5 18.1C10.7 18.1 11.4 17.5 11.4 16.4V11.2H9.8V16.3C9.8 16.8 9.5 17 9 17C8.5 17 8.2 16.7 8 16.2L7 16.8ZM13 16.7C13.6 17.6 14.7 18.1 16 18.1C17.6 18.1 18.7 17.2 18.7 15.7C18.7 14.3 17.9 13.7 16.3 13L15.7 12.8C14.7 12.4 14.3 12 14.3 11.4C14.3 10.7 14.9 10.2 15.8 10.2C16.6 10.2 17.2 10.5 17.6 11.2L18.7 10.5C18.1 9.4 17.1 8.9 15.8 8.9C14.2 8.9 13.1 9.9 13.1 11.4C13.1 12.8 13.9 13.4 15.4 14.1L16 14.3C17.1 14.8 17.6 15.3 17.6 16C17.6 16.8 16.9 17.3 15.9 17.3C14.9 17.3 14.2 16.8 13.8 15.9L13 16.7Z" fill="#000000"/>
  </svg>
);

export const TsLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#3178C6"/>
    <path d="M11 11H7V9H17V11H13V18H11V11ZM14.5 17C15 17.6 15.9 18 17 18C18.4 18 19.3 17.2 19.3 16C19.3 14.8 18.6 14.3 17.2 13.7L16.7 13.5C15.8 13.1 15.4 12.8 15.4 12.2C15.4 11.6 15.9 11.1 16.7 11.1C17.4 11.1 17.9 11.4 18.3 12L19.4 11.3C18.8 10.3 17.9 9.8 16.7 9.8C15.2 9.8 14.2 10.8 14.2 12.1C14.2 13.4 15 14 16.4 14.6L16.9 14.8C17.9 15.2 18.3 15.6 18.3 16.3C18.3 17 17.7 17.4 16.8 17.4C15.9 17.4 15.3 16.9 14.9 16.1L14.5 17Z" fill="white"/>
  </svg>
);

export const ReactLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(30 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(90 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(150 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="#00D8FF"/>
  </svg>
);

export const NodeLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#339933"/>
    <path d="M12 6.5C8.96 6.5 6.5 8.96 6.5 12C6.5 15.04 8.96 17.5 12 17.5C15.04 17.5 17.5 15.04 17.5 12C17.5 8.96 15.04 6.5 12 6.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" fill="white"/>
  </svg>
);

export const MongoLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C12 2 6 8.5 6 14C6 17.5 8.5 21 12 22C15.5 21 18 17.5 18 14C18 8.5 12 2 12 2Z" fill="#47A248"/>
    <path d="M12 2V22C12 22 17.5 17.5 17.5 14C17.5 8.5 12 2 12 2Z" fill="#499D4A"/>
    <path d="M12 4.5V19.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const PostgresLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#336791"/>
    <path d="M8 8C9.5 6.5 14.5 6.5 16 8C17.5 9.5 17.5 14.5 16 16C14.5 17.5 9.5 17.5 8 16C6.5 14.5 6.5 9.5 8 8Z" fill="#4169E1"/>
    <path d="M10 10C10 9 14 9 14 10V14C14 15 10 15 10 14V10Z" fill="white"/>
  </svg>
);

export const RedisLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#DC382D"/>
    <path d="M2 12L12 17L22 12" stroke="#DC382D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 17L12 22L22 17" stroke="#A82820" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TailwindLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.4 8.73 12.05 9.39 12.75 10.1C13.9 11.27 15.22 12.62 18.5 12.62C21.17 12.62 22.83 11.29 23.5 8.62C22.5 9.95 21.33 10.45 20 10.12C19.1 9.89 18.45 9.23 17.75 8.52C16.6 7.35 15.28 6 12 6ZM5.5 12.62C2.83 12.62 1.17 13.95 0.5 16.62C1.5 15.29 2.67 14.79 4 15.12C4.9 15.35 5.55 16.01 6.25 16.72C7.4 17.89 8.72 19.24 12 19.24C14.67 19.24 16.33 17.91 17 15.24C16 16.57 14.83 17.07 13.5 16.74C12.6 16.51 11.95 15.85 11.25 15.14C10.1 13.97 8.78 12.62 5.5 12.62Z" fill="#06B6D4"/>
  </svg>
);

export const GitLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21.6 10.6L13.4 2.4C12.9 1.9 12 1.9 11.5 2.4L9.8 4.1L12.3 6.6C12.9 6.4 13.6 6.5 14.1 7C14.6 7.5 14.7 8.2 14.5 8.8L16.8 11.1C17.4 10.9 18.1 11 18.6 11.5C19.3 12.2 19.3 13.2 18.6 13.9C17.9 14.6 16.9 14.6 16.2 13.9C15.7 13.4 15.6 12.7 15.8 12.1L13.7 10V15.6C13.9 15.8 14 16 14 16.3C14 17.3 13.2 18.1 12.2 18.1C11.2 18.1 10.4 17.3 10.4 16.3C10.4 15.5 10.9 14.9 11.6 14.6V9.4C10.9 9.1 10.4 8.5 10.4 7.7C10.4 7.4 10.5 7.2 10.6 7L8.1 4.5L2.4 10.2C1.9 10.7 1.9 11.6 2.4 12.1L10.6 20.3C11.1 20.8 12 20.8 12.5 20.3L21.6 11.2C22.1 10.7 22.1 10.1 21.6 10.6Z" fill="#F05032"/>
  </svg>
);

export const DockerLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M22.5 11.5C21.9 10.5 20.8 10 19.5 10.1C19.1 8.8 18.2 8 16.9 8.1C16.8 8.1 16.7 8.1 16.6 8.2C16.2 6.5 14.5 5.5 13 6.1C12.3 6.4 11.8 7 11.5 7.7H2.5C1.7 7.7 1 8.4 1 9.2V14.5C1 18.6 4.4 22 8.5 22C14.5 22 19.8 17.8 21.5 12.8C22.2 12.8 22.8 12.3 22.5 11.5Z" fill="#2496ED"/>
    <rect x="3" y="11" width="2" height="2" fill="white"/>
    <rect x="6" y="11" width="2" height="2" fill="white"/>
    <rect x="9" y="11" width="2" height="2" fill="white"/>
    <rect x="6" y="8.5" width="2" height="2" fill="white"/>
    <rect x="9" y="8.5" width="2" height="2" fill="white"/>
    <rect x="12" y="8.5" width="2" height="2" fill="white"/>
  </svg>
);
