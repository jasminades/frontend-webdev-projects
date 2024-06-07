import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Team = () => {
  return (
    <div style={{ marginLeft: '70px', marginRight: '70px' }}>
      <Grid container spacing={3}>
        {/* Left Side: Trainers */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                Meet Our Trainers
              </Typography>
              <Typography variant="body2" component="p">
                Our boxing club is proud to have a team of dedicated and experienced trainers who are passionate about helping you achieve your fitness and boxing goals. Get to know our trainers below:
              </Typography>
              <div>
                <img src={process.env.PUBLIC_URL + '/images/gym.jpg'} alt="Lamia Ali" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <Typography variant="h6">Lamia Ali</Typography>
                <Typography variant="body2">Specialization: Boxing Techniques</Typography>
                <Typography variant="body2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id posuere tellus.</Typography>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + '/images/ali.jpg'} alt="Muhammad Ali" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <Typography variant="h6">Muhammad Ali</Typography>
                <Typography variant="body2">Specialization: Strength and Conditioning</Typography>
                <Typography variant="body2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id posuere tellus.</Typography>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + '/images/gym2.jpg'} alt="Lamia Ali" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <Typography variant="h6">Lamia Ali</Typography>
                <Typography variant="body2">Specialization: Boxing Techniques</Typography>
                <Typography variant="body2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id posuere tellus.</Typography>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + '/images/gym1.jpg'} alt="Muhammad Ali" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <Typography variant="h6">Muhammad Ali</Typography>
                <Typography variant="body2">Specialization: Strength and Conditioning</Typography>
                <Typography variant="body2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id posuere tellus.</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Right Side: Big Picture */}
        <Grid item xs={12} md={6}>
          <img src={process.env.PUBLIC_URL + '/images/homepage.jpg'} alt="Big Picture" style={{ width: '83%', height: '71%' }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Team;
