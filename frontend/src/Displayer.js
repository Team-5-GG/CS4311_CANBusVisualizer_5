import './displayer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CANBusDisplayer from './CANBusDisplayer';
import PacketDisplayer from './PacketDisplayer'
import { Link } from 'react-router-dom';
import CreatePopup from './components/createProjectPopup';
import SavePopUp from './components/savePopUp';
import ImportPopup from './components/importProjectPopup';
import OpenPopup from './components/openProjectPopup';
import DeletePopup from './components/deleteProjectPopup';
import ArchivePopup from './components/archiveProjectPopup';
import ExportPopup from './components/exportProjectPopup';
import SyncPopup from './components/syncProjectPopup';



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
                <NavDropdown.Item><ImportPopup/></NavDropdown.Item>
                <NavDropdown.Item><OpenPopup/></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <SavePopUp></SavePopUp>
                </NavDropdown.Item>
                <NavDropdown.Item><DeletePopup/></NavDropdown.Item>
                <NavDropdown.Item ><ArchivePopup/></NavDropdown.Item>
                <NavDropdown.Item><ExportPopup/></NavDropdown.Item>
                <NavDropdown.Item><SyncPopup/></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Edit" id="basic-nav-dropdown">
                <NavDropdown.Item>Rename Project</NavDropdown.Item>
                <NavDropdown.Item>Edit Initials</NavDropdown.Item>
                <NavDropdown.Item>Import Blacklist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Annotate Node</NavDropdown.Item>
                <NavDropdown.Item>Label Node</NavDropdown.Item>
                <NavDropdown.Item>Assign Icon</NavDropdown.Item>
                <NavDropdown.Item>Change Visibility</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Label Link</NavDropdown.Item>
                <NavDropdown.Item>Add Relationship</NavDropdown.Item>
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