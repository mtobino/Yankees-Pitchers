# Yankees Pitchers Roster Application

A full-stack web application for managing the New York Yankees pitching roster. Built with React and Express, featuring both grid and card views with full CRUD functionality.

## Features

- **Dual View Options**:
  - Grid View with sorting and filtering capabilities (using AG-Grid)
  - Card View for a more visual representation
- **Full CRUD Operations**:
  - Add new pitchers
  - Edit existing pitcher information
  - Delete pitchers from the roster
  - View comprehensive pitcher statistics
- **Responsive Design**:
  - Works on desktop and mobile devices
  - Adaptive layout based on screen size

## Tech Stack

### Frontend
- React 18 with Vite
- AG-Grid Enterprise for advanced data grid features
  - Multi-sorting
  - Column filtering
  - Custom cell rendering
- React Router v6 for navigation
- PropTypes for component prop validation
- Axios for HTTP requests
- CSS
  - Custom properties (CSS variables)
  - CSS Grid and Flexbox
  - Container queries for responsive design
  - Mobile-first approach

### Backend
- Node.js
- Express.js framework
- Middleware
  - CORS for cross-origin resource sharing
  - Morgan for request logging
  - Express.json for parsing JSON bodies
- RESTful API endpoints
  - GET /pitchers
  - POST /pitchers
  - PUT /pitchers/:id
  - DELETE /pitchers/:id

### Development Tools
- Git for version control
- npm for package management
- ESLint for code linting
- Development servers
  - Vite dev server (frontend)
  - Nodemon (backend)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   cd ..
   ```
3. Start the development server
   ```bash
   cd backend
   npm run dev
   # in a new terminal
   cd frontend
   npm run dev
   ```
4. Open the application in your browser
   ```bash
   http://localhost:5173
   ```
