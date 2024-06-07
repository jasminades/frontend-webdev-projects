import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Trainings = () => {
  return (
    <div style={{ marginLeft: '70px', marginRight: '70px' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Our Training Programs
          </Typography>
          <Typography variant="body2" component="p">
            At our boxing club, we offer a variety of training programs designed to suit your needs and goals. Whether you're looking to improve your boxing skills, increase your strength and endurance, or simply get in shape, we have a program for you.
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <img src={process.env.PUBLIC_URL + '/images/join.jpg'} alt="Training 1" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <img src={process.env.PUBLIC_URL + '/images/jumprope.jpg'} alt="Training 2" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <img src={process.env.PUBLIC_URL + '/images/join.jpg'} alt="Training 3" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <img src={process.env.PUBLIC_URL + '/images/jumprope.jpg'} alt="Training 4" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <img src={process.env.PUBLIC_URL + '/images/join.jpg'} alt="Training 5" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <img src={process.env.PUBLIC_URL + '/images/jumprope.jpg'} alt="Training 6" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Trainings;
