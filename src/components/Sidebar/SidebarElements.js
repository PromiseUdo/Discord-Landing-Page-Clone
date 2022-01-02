import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdOutlineClose } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'


export const SidebarContainer = styled.div`
  position: fixed;
  width: 330px;
  z-index: 9999;
  height: 100%;
  top: 0;
  right: 0;
  padding: 24px 48px 20px 24px;
  background: #fff;
  vertical-align: baseline;
  transition: 0.3s ease-in-out;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow-y: scroll;
  opacity: ${(props) => (props.isSidebarOpen === true ? '1' : '0')};
  right: ${(props) => (props.isSidebarOpen === true ? '0' : '-330%')};

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const SidebarTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Spacer = styled.div`
  border-bottom: 1px solid #ebedef;
  margin: 24px 0 16px 0;
`

export const SidebarLogo = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`

export const SidebarLogoImg = styled.img`
  object-fit: contain;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  background: #fff;
`

export const CloseIcon = styled(MdOutlineClose)`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  font-size: 1.5rem;

  cursor: pointer;
  color: #23272a;
`

export const DiscordLogo = styled.div``

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 40px);
  justify-items: start;

`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  list-style: none;
  color: #23272a;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  padding-left: 16px;
  font-size: 16px;
  font-weight:300;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    background: #f5f8fa;
    color: #00b0f4;
    border-radius: 8px;
    width: 100%;
  }
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    font-size:1.5rem;
`

export const SidebarFooter = styled.div`
  width:100%;
  position: absolute;
  bottom: 0;
  left:0;
  right:0;
  padding:22px;
`

export const SidebarButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #5a67f2;
  text-decoration: none;
  color: #fff;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  padding: 5px 16px;
  cursor: pointer;
  border-radius: 50px;
  display: inline-flex;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #7781f5;
    box-shadow: 4px 10px 21px -13px rgba(0, 0, 0, 0.75);
  }
`
