import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const Section3 = () => {
  return (
    <section>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
				<h2>Chronologs help all types of organizations.</h2>
				<img src="orgs.svg"/>
				<Button sx={{ backgroundColor: '#27AAE1', color: '#fff'}}>Get a chronolog</Button>
			</Box>
    </section>
  )
}

export default Section3