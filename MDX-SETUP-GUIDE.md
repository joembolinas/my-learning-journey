# MDX Setup and Installation Guide

## 📦 Dependencies Installation

To run the interactive MDX documentation with React components, you need to install the required dependencies.

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```
   
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   Or with yarn:
   ```bash
   yarn dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000` to view your interactive documentation.

## 🏗️ Project Structure

```
├── components/          # React components for MDX
│   ├── CourseCard.jsx
│   ├── ProgressMeter.jsx
│   ├── FeatureHighlight.jsx
│   ├── NavigationCard.jsx
│   ├── TechStack.jsx
│   └── Timeline.jsx
├── pages/              # Next.js pages
│   ├── _app.js         # App configuration
│   ├── _document.js    # Document configuration
│   └── index.mdx       # Main documentation (your README)
├── package.json        # Dependencies and scripts
└── next.config.js      # Next.js configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static files
- `npm run lint` - Run ESLint

## 🎨 Component Usage

Your MDX file can now use these interactive components:

```mdx
<CourseCard
  code="MO-IT103"
  name="Computer Programming 2"
  focusAreas={["Web Development", "Database Integration"]}
  status="developing"
  progress={75}
/>

<ProgressMeter value={75} label="Progress" color="blue" />

<FeatureHighlight
  title="AI-First Structure"
  description="Optimized for AI assistant navigation"
  features={["Smart organization", "Automated workflows"]}
/>
```

## 🚀 Production Deployment

For static hosting (GitHub Pages, Netlify, etc.):

```bash
npm run build
npm run export
```

This creates a `out/` directory with static files ready for deployment.

## 🔧 Troubleshooting

### Common Issues

1. **Module not found errors**: Run `npm install` to ensure all dependencies are installed
2. **Port already in use**: Change port with `npm run dev -- -p 3001`
3. **Component not recognized**: Make sure components are imported in `_app.js`

### Development Tips

- Components are automatically available in all MDX files
- Use styled-jsx for component styling
- Restart dev server after changing configuration files
