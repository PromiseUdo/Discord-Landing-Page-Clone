import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #404eed;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  align-items: center;
  width: 90%;
  height: 80px;

`

export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  /* margin-left: 10px; */
  text-decoration: none;

  @media screen and (max-width: 700px) {
    margin-left: 5px;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;

  &:hover {
    text-decoration: underline;
  }
`
export const NavBtnAndMobileMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`

export const NavBtnLink = styled(Link)`
display:flex;
align-items:center;
  background: #fff;
  color: #23272a;
  white-space: nowrap;
  padding: 7px 16px;
  font-size: 14px;
  line-height:24px;
  outline: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #5865f2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    /* transform: translate(-100%, 60%); */
  }
`

export const DiscordLogo = styled.img`
  object-fit: contain;
`
