import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="bg-dark navbar-dark" expand="md">
          <NavbarBrand href="/">Uncublicle</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-white" href="/profiles">Profiles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#">LogOut</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
