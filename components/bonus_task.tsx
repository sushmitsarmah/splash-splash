
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';

const showImages = (organizations: any[], orgIndex: number) => {
	if(organizations && organizations.length > 0 && organizations[orgIndex]) {
		console.log(organizations[orgIndex])
		const items = organizations[orgIndex].stories.items;
		const images = items.slice(0, 2).map((k: any) => {
			return <Card key={k.id} sx={{ maxWidth: 345, margin: '20px', backgroundColor: 'transparent' }}>
					<CardMedia
						component="img"
						height="140"
						image={k.gifUrl}
						alt=""
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
							{k.name}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{color: '#fff'}}>
							{k.regionLong} - {k.totalContributions} contributions
						</Typography>
					</CardContent>
			</Card>
		})
		images.push(
			<Card sx={{ maxWidth: 345, margin: '20px', backgroundColor: 'transparent', border: '1px solid #27AAE1', display: 'flex' }}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" sx={{ color: '#27AAE1' }}>
							+{items.length - 2} more chronologs
						</Typography>
					</CardContent>
			</Card>	
		)
		return images
	} else {
		return ''
	}
}

const Bonus = () => {
  const [organizations, setOrg] = useState<any>([])
  const [orgIndex, setOrgIndex] = useState<any>(0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/org`)
      const data = await res.json()
      console.log(data)

      setOrg(data)
    }
    fetchData()
  }, [])

	const prevOrg = () => {
		let index = orgIndex - 1;
		index = index < 0 ? 0 : index;
		setOrgIndex(index);
	};

	const nextOrg = () => {
		let index = orgIndex + 1;
		index = index >= organizations.length ? orgIndex : index;
		setOrgIndex(index);
	};

	return (
		<section style={{ backgroundColor: '#2D3542', color: '#fff', padding: '30px', marginBottom: '30px', marginTop: '30px'}}>
			<Box>
				<p>Organization Spotlight</p>
				<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
					<h2>{organizations[orgIndex]?.name}</h2>
					<div>
						<ArrowBack onClick={prevOrg} sx={{cursor: 'pointer'}} />
						<ArrowForward onClick={nextOrg} sx={{cursor: 'pointer'}} />
					</div>
				</Box>
			</Box>
			<Box>
				<p>{organizations[orgIndex]?.description}</p>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					{showImages(organizations, orgIndex)}
				</Box>
			</Box>
		</section>
	);
};

export default Bonus;