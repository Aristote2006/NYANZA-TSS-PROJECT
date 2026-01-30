# NYANZA TECHNICAL SECONDARY SCHOOL WEBSITE

Welcome to the official website for NYANZA Technical Secondary School. This modern web application showcases our educational programs, leadership, news, and contact information.

## Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Material UI (MUI v5)** - Comprehensive component library
- **React Router DOM** - Declarative routing solution
- **Framer Motion** - Production-ready motion library
- **Axios** - Promise-based HTTP client

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT Authentication** - Secure authentication mechanism
- **bcrypt** - Password hashing library

## Project Structure

```
NYANZA TSS PROJECT/
│
├── client/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── theme/
│   └── package.json
│
└── server/                 # Node.js backend application
    ├── src/
    │   ├── config/
    │   ├── models/
    │   ├── controllers/
    │   ├── routes/
    │   └── middlewares/
    ├── .env
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or cloud Atlas)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory

#### Frontend Setup
```bash
cd client
npm install
npm start
```

#### Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
npm start
```

## Features

- Responsive design for all devices
- Smooth animations and transitions
- Admin authentication and dashboard
- Content management for news, leaders, and programs
- Contact form with email notifications
- Modern UI with Material Design principles

## Deployment

The backend is configured for deployment on Render. Make sure to set the environment variables in your deployment platform.

## Contributing

We welcome contributions to improve the school website. Please fork the repository and submit a pull request with your changes.

## License

This project is created for NYANZA Technical Secondary School.