import React from 'react'
import discordLogo from '../../assets/images/discord-logo.svg'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
  MobileIcon,
  NavBtnAndMobileMenu,
  DiscordLogo,
} from './NavbarElements'

const Navbar = ({toggleSidebar}) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <DiscordLogo src={discordLogo} />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink to=''>Download</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to=''>Nitro</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to=''>Safety</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to=''>Support</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to=''>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to=''>Careers</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtnAndMobileMenu>
            <NavBtn>
              <NavBtnLink to='/opendiscord'>Login</NavBtnLink>
            </NavBtn>
            <MobileIcon onClick={toggleSidebar}>
              <FaBars />
            </MobileIcon>
          </NavBtnAndMobileMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
