
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Section1 = () => {
	return (
		<section style={{ margin: '30px', paddingBottom: '200px' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
					<h2>Any location. Any project.</h2>
					<p>There are no requirements for where to place your photostations or what to monitor. You choose what story to tell.</p>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<Box sx={{marginRight: '40px'}}>
						<h5>Water levels</h5>
						<p>
							Visually monitor how water levels of big bodies of water change over time.
							Seeing how the surrounding area reacts to various water levels is important
							context for quantitative measurements you may be taking.
						</p>
						<a href="#">Explore on the map</a>
						<hr style={{border: '0.5px solid #e1e1e1'}} />
						<p>Invasive plant species</p>
						<hr style={{border: '0.5px solid #e1e1e1'}} />
						<p>Dams (natural and manmade)</p>
						<hr style={{border: '0.5px solid #e1e1e1'}} />
						<p>Animal and insect populations</p>
						<hr style={{border: '0.5px solid #e1e1e1'}} />
						<p>Wildfire recovery</p>
						<hr style={{border: '0.5px solid #e1e1e1'}} />
						<p>Scenic vistas</p>
						<hr style={{border: '0.5px solid #e1e1e1'}} />
					</Box>
					<img src='/section1-img.png' style={{width: '600px', height: '600px'}}/>
				</Box>
			</Box>
		</section>

	);
};

export default Section1;