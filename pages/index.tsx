import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box m={4}>
      <Typography color="primary" variant="h1">
        This is a really sad splash page :(
      </Typography>
    </Box>
  )
}

export default Home
