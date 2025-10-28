# 🎯 Easyday

A modern, full-stack task management application built with the MERN stack. Easyday helps you organize your daily tasks with a clean, intuitive interface and smooth animations.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.1.0-blue.svg)

## ✨ Features

- 📝 **Create, Read, Update, Delete** tasks with ease
- ✅ **Mark tasks as completed** with a single click
- 📅 **Due date tracking** for better time management
- 📊 **Task status management** (Pending, In Progress, Completed)
- 📱 **Responsive design** that works on all devices
- 🎨 **Beautiful animations** powered by Framer Motion
- 🔄 **Pagination** for efficient task browsing
- 🛡️ **Security features** including Helmet and rate limiting
- ⚡ **Fast and modern** UI with React 19 and Vite

## 🏗️ Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - Rate limiting middleware
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Easyday/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                 # MongoDB connection
│   │   ├── controllers/
│   │   │   └── taskController.js     # Task CRUD operations
│   │   ├── middlewares/
│   │   │   └── errorHandler.js       # Global error handler
│   │   ├── models/
│   │   │   └── Task.js               # Task schema
│   │   ├── routes/
│   │   │   └── taskRoutes.js         # API routes
│   │   └── utils/
│   │       └── validateTaskInput.js  # Input validation
│   ├── index.js                      # Entry point
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx            # App header
    │   │   ├── LoadingSpinner.jsx    # Loading component
    │   │   ├── TaskCard.jsx          # Task display card
    │   │   └── TaskForm.jsx          # Task form component
    │   ├── pages/
    │   │   ├── Home.jsx              # Tasks list page
    │   │   ├── Create.jsx            # Create task page
    │   │   ├── Edit.jsx              # Edit task page
    │   │   ├── Details.jsx           # Task details page
    │   │   └── NotFound.jsx          # 404 page
    │   ├── services/
    │   │   └── api.ts                # API service
    │   ├── utils/
    │   │   └── axios.js              # Axios configuration
    │   ├── App.jsx                   # Main app component
    │   ├── main.jsx                  # Entry point
    │   └── index.css                 # Global styles
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Easyday
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=3715
   MONGODB_URI=mongodb://localhost:27017/easyday
   ```

3. **Set up the Frontend**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:3715`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (or another port if 5173 is occupied)

3. **Open your browser** and navigate to the frontend URL

## 📡 API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks (with pagination) |
| GET | `/tasks/:id` | Get a specific task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| PUT | `/tasks/:id/completed` | Mark task as completed/incomplete |
| DELETE | `/tasks/:id` | Delete a task |

### Query Parameters

- `page` (optional) - Page number for pagination (default: 1)
- `limit` (optional) - Number of tasks per page (default: 10)

### Request Body Examples

**Create/Update Task:**
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "dueDate": "2024-12-31T23:59:59.999Z"
}
```

**Mark as Completed:**
```json
{
  "completed": true
}
```

## 🎨 Features in Detail

### Task Management
- Create tasks with title, description, and due date
- Edit existing tasks
- Delete tasks you no longer need
- Mark tasks as completed or incomplete
- View detailed information for each task

### User Interface
- Clean and modern design with TailwindCSS
- Smooth animations and transitions
- Responsive layout for mobile and desktop
- Real-time feedback with toast notifications
- Loading states for better UX

### Security
- Helmet.js for setting secure HTTP headers
- Rate limiting to prevent abuse
- CORS configuration for cross-origin requests
- Input validation on both client and server

## 🛠️ Development

### Backend Scripts
```bash
npm run dev    # Start development server with nodemon
```

### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📦 Building for Production

### Backend
The backend doesn't require a build step. Simply ensure all dependencies are installed:
```bash
cd backend
npm install --production
```

### Frontend
```bash
cd frontend
npm run build
```
The production-ready files will be in the `dist` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components by [DaisyUI](https://daisyui.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using the MERN stack
