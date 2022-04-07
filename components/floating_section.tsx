import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const FloatingSection = () => {
  return (
    <section style={{
			backgroundColor: 'transparent',
			display: 'flex',
			justifyContent: 'center'
		}}>
      <Box sx={{
				display: 'flex',
				backgroundColor: '#27AAE1',
				flexDirection: 'column',
				position: 'absolute',
				color: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
				height: '656px',
				width: '906px',
				marginTop: '-100px',
				borderRadius: '15px',
				padding: '10px'
			}}>
        <h1>Where Chronolog is today.</h1>
				<img src="/chronos.png" style={{width: '100%'}}/>
				<hr style={{border: '0.5px solid #2D3542', width:'100%'}} />
				<img src="/chrono_instis.png" style={{width: '100%', marginTop: '50px'}}/>
      </Box>
    </section>
  )
}

export default FloatingSection