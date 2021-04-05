import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navigation = () => {
  const MainHeader = styled.header`
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: palevioletred;
  `;

  const Nav = styled.nav`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const NavUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const NavLi = styled.li`
    padding: 0;
    margin: 0 2rem;
  `;

  return (
    <MainHeader>
      <Nav>
        <NavUl>
          <NavLi>
            <NavLink to="/" exact>
              Films
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/characters">Characters</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/favorites">Favorites</NavLink>
          </NavLi>
        </NavUl>
      </Nav>
    </MainHeader>
  );
};

export default navigation;
