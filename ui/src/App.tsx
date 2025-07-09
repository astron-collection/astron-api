import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div className="text-center mt-10">
              <h1 className="text-3xl font-bold">Welcome to Astron API GUI</h1>
              <p className="mt-4 text-gray-600">
                Please <a href="/login" className="text-indigo-500 underline">login</a> to continue.
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;