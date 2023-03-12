import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function ComponentNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-dark bg-dark" expand="md" >
        <NavbarBrand href="/">Gestor de usuários</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem>
              <NavLink href="/login">Sair</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/register/user">Cadastrar novo usuário</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/users" >Usuários</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

