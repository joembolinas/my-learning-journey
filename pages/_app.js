import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

// Import your custom components
import { CourseCard } from '../components/CourseCard';
import { ProgressMeter } from '../components/ProgressMeter';
import { FeatureHighlight } from '../components/FeatureHighlight';
import { NavigationCard } from '../components/NavigationCard';
import { TechStack } from '../components/TechStack';
import { Timeline } from '../components/Timeline';

// Define components that will be available in all MDX files
const components = {
  CourseCard,
  ProgressMeter,
  FeatureHighlight,
  NavigationCard,
  TechStack,
  Timeline,
  // You can also override default HTML elements
  h1: (props) => <h1 style={{ color: '#1f2937', marginBottom: '1rem' }} {...props} />,
  h2: (props) => <h2 style={{ color: '#374151', marginBottom: '0.75rem' }} {...props} />,
  h3: (props) => <h3 style={{ color: '#4b5563', marginBottom: '0.5rem' }} {...props} />,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Academic Workspace - TERM-3 SY-2024-25</title>
        <meta name="description" content="BS IT Network & Cybersecurity Academic Workspace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MDXProvider components={components}>
        <div style={{ 
          minHeight: '100vh', 
          backgroundColor: '#f9fafb',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          <Component {...pageProps} />
        </div>
      </MDXProvider>
      
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          line-height: 1.6;
          color: #374151;
        }
        
        a {
          color: #3b82f6;
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        code {
          background: #f3f4f6;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875em;
        }
        
        pre {
          background: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        
        pre code {
          background: none;
          padding: 0;
          color: inherit;
        }
        
        blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #6b7280;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        
        th, td {
          border: 1px solid #e5e7eb;
          padding: 0.75rem;
          text-align: left;
        }
        
        th {
          background: #f9fafb;
          font-weight: 600;
        }
        
        ul, ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        li {
          margin: 0.5rem 0;
        }
      `}</style>
    </>
  );
}

export default MyApp;
