import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

const NavBar = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <div className="justify content-end">
              <Navbar.Brand href="#home">Children Bank</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Outlet></Outlet>
        </main>
      </Provider>
    </>
  );
};
export default NavBar;
