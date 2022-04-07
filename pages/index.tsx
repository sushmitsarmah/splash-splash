import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Box m={4}>
        <Typography color="primary" variant="h1">
          This is a really sad splash page :(
        </Typography>
      </Box>
    </>
  )
}

export default Home
