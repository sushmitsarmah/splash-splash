
import Box from '@mui/material/Box';

import DoneIcon from '@mui/icons-material/Done';


const Section2 = () => {
	return (
		<section>
			<img src="/section2-img.png"  style={{height: '526px', width: '100%'}}/>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
				<h2>What can I do with the photos?</h2>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<p style={{ flex: 1, width: '349px'}}>Chronologs are used by various organizations in numerous ways. Check out some of the creative ways our customers have utilized their chronologs:</p>
					<ul style={{ flex: 1, listStyle: 'none'}}>
						<li>
							<DoneIcon sx={{ color: '#FFCB05'}} />
							<span>Post new photos to Facebook, Twitter and Instagram</span>
						</li>
						<li>
							<DoneIcon sx={{ color: '#FFCB05'}} />
							<span>Embed the time lapse in your website</span>
						</li>
						<li>
							<DoneIcon sx={{ color: '#FFCB05'}} />
							<span>Validate grant money or apply for new grants</span>
						</li>
						<li>
							<DoneIcon sx={{ color: '#FFCB05'}} />
							<span>Create educational material</span>
						</li>
						<li>
							<DoneIcon sx={{ color: '#FFCB05'}} />
							<span>Analyze the images as a dataset for research</span>
						</li>
						<li>
							<DoneIcon sx={{ color: '#FFCB05'}} />
							<span>Host a digital exhibit in your visitor center</span>
						</li>
					</ul>
				</Box>
			</Box>
		</section>
	);
};

export default Section2;