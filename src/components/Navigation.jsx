// src/components/Navigation.jsx
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-blue-500 p-4">
    <ul className="flex space-x-4">
      <li><Link to="/" className="text-white hover:underline">Home</Link></li>
      <li><Link to="/about" className="text-white hover:underline">About</Link></li>
      <li><Link to="/courses" className="text-white hover:underline">Courses</Link></li>
      <li><Link to="/campus-life" className="text-white hover:underline">Campus Life</Link></li>
    </ul>
  </nav>
)

export default Navigation;
