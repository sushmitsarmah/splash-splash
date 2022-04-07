import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Bonus from '../components/bonus_task'
import FloatingSection from '../components/floating_section'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <FloatingSection />
      <Section2 />
      <Bonus />
      <Section3 />
      <Footer />
    </>
  )
}

export default Home
