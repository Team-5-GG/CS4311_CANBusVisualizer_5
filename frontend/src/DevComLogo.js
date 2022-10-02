import { Link } from 'react-router-dom';
import './index.css';
import logo from './images/logo.jpg';
const Navbar = () => {

  return (
    <header className="Logo-Image">
        <Link to="/">
          <img src={logo} width="250" height="250" alt="image is not available"></img>
        </Link>
    </header>
  )
}

export default Navbar