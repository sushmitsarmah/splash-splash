import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <>
      <Box sx={{
				display: 'flex',
				flexDirection: 'column',
				position: 'absolute',
				color: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
				height: '526px',
				width: '100%'
			}}>
        <h1>Chronologs in the wild.</h1>
        <Button sx={{ color: '#fff', border: '1px solid #fff'}}>Get a chronolog</Button>
      </Box>
      <img src="/header-img.png" style={{height: '526px', width: '100%'}} />
    </>
  )
}

export default Header
