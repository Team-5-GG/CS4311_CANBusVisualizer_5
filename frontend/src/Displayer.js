import './displayer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CANBusDisplayer from './CANBusDisplayer';
import PacketDisplayer from './PacketDisplayer'
import { Link } from 'react-router-dom';
import CreatePopup from './components/createProjectPopup';


export function MainPage() {
  return (
    <div className="displayer">
      {/* Close button */}
      <Link to="/">
        <button type="button" className="close-button"></button>
      </Link>
      {/* End of close button */}
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Project" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <CreatePopup/>
                </NavDropdown.Item>
                <NavDropdown.Item href="./">Import</NavDropdown.Item>
                <NavDropdown.Item href="./">Open</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="./">Save</NavDropdown.Item>
                <NavDropdown.Item href="./">Delete</NavDropdown.Item>
                <NavDropdown.Item href="./">Archive</NavDropdown.Item>
                <NavDropdown.Item href="./">Export</NavDropdown.Item>
                <NavDropdown.Item href="./">Sync</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Edit" id="basic-nav-dropdown">
                <NavDropdown.Item href="./">Rename Project</NavDropdown.Item>
                <NavDropdown.Item href="./">Edit Initials</NavDropdown.Item>
                <NavDropdown.Item href="./">Import Blacklist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="./">Annotate Node</NavDropdown.Item>
                <NavDropdown.Item href="./">Label Node</NavDropdown.Item>
                <NavDropdown.Item href="./">Assign Icon</NavDropdown.Item>
                <NavDropdown.Item href="./">Change Visibility</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="./">Label Link</NavDropdown.Item>
                <NavDropdown.Item href="./">Add Relationship</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Search" id="basic-nav-dropdown">
                  <NavDropdown.Item href="./">Map</NavDropdown.Item>
                  <NavDropdown.Item href="./">Traffic</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Archive" id="basic-nav-dropdown">
              <NavDropdown.Item href="./">Label Link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <CANBusDisplayer></CANBusDisplayer>
        <PacketDisplayer></PacketDisplayer>

      </div>
    </div>
  );

}
export default MainPage;