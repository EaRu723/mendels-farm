# Mendel Farm

A web application for exploring and discovering sustainable farms and agricultural practices.

## Project Structure

- `frontend/`: React-based web application
- `backend/`: FastAPI-based REST API
- `scraper/`: Data collection utilities

## Technology Stack

### Frontend
- React 18
- React Router for navigation
- Styled Components for styling
- Modern responsive design

### Backend
- FastAPI framework
- Uvicorn ASGI server
- Python 3.x
- Pydantic for data validation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python 3.x
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:9000`

## Features
- Browse sustainable farms
- Interactive farm exploration
- Detailed farm information and practices
- Modern, responsive user interface

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
