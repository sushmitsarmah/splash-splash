
import Box from '@mui/material/Box';

const Footer = () => {
	return (
		<footer style={{backgroundColor: "#2D3542", color: '#fff', bottom: 0}}>
			<Box m={4} sx={{ display: 'flex', flexDirection: 'row' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<div style={{flex: 1, height: '50%'}}/>
					<img src='/footer-logo.svg' style={{flex: 1, width: '90%'}}/>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<Box sx={{flex: 1}}>
							<h3>For nature-lovers</h3>
							<p>Explore chronologs</p>
						</Box>
						<Box sx={{flex: 1}}>
							<h3>For organizations</h3>
							<p>About Us</p>
							<p>How it works</p>
						</Box>
						<Box sx={{flex: 1}}>
							<p>Use cases</p>
							<p>Get a chronolog</p>
						</Box>
					</Box>
					<p>
						Chronolog is a monitoring tool for parks, nature centers,
						wildlife organizations, schools, and museums worldwide.
						With over 20,000 contributors across 100 organizations,
						Chronolog is on a mission to engage communities with nature
						while recording important natural changes.
					</p>	
					<p>© Chronolog 2021  |  Terms</p>
				</Box>
			</Box>


		</footer>
	);
};

export default Footer;