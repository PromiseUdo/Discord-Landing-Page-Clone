import React from 'react'
import discordDarkLogo from '../../assets/images/sidebar-logo.svg'
import { DownloadIcon } from '../HeroSection/HeroElements'
import {
  SidebarContainer,
  SidebarTopRow,
  SidebarLogo,
  Icon,
  CloseIcon,
  ArrowRight,
  Spacer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLogoImg,
  SidebarLink,
  SidebarFooter,
  SidebarButton,
} from './SidebarElements'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  React.useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  })

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarTopRow>
        <SidebarLogo to='/'>
          <SidebarLogoImg src={discordDarkLogo} />
        </SidebarLogo>
        <Icon onClick={toggleSidebar}>
          <CloseIcon />
        </Icon>
      </SidebarTopRow>
      <Spacer />
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink className='active' to='/'>
            Home
          </SidebarLink>
          <SidebarLink to='/'>Download</SidebarLink>
          <SidebarLink to='/'>Nitro</SidebarLink>
          <SidebarLink to='/'>
            Safety <ArrowRight />
          </SidebarLink>
          <SidebarLink to='/'>
            Mod Academy <ArrowRight />
          </SidebarLink>
          <SidebarLink to='/'>Support</SidebarLink>
          <SidebarLink to='/'>Blog</SidebarLink>
          <SidebarLink to='/'>Careers</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>

      <SidebarFooter>
        <SidebarButton to='/'>
          <DownloadIcon color='#fff' /> Download for Windows
        </SidebarButton>
      </SidebarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
