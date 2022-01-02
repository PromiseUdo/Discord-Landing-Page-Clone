import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'
import MainSection from '../components/MainSection'

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)

    window.scrollY = 0
  }

 
  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <HeroSection setIsSidebarOpen={setIsSidebarOpen} />
      <MainSection />
    </>
  )
}

export default Home
