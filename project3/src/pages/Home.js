import React from 'react';
import ParagraphComponent from '../components/ParagraphComponent';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';

const Home = () => {
  return (
    <div style={{ marginLeft: '70px', marginRight: '70px' }}>
      <Typography variant="h2" align="center">Welcome to Our Boxing Club!</Typography>
      <Typography variant="body1" align="center">
        Experience the thrill of boxing at our club! We offer a range of training programs tailored to individuals of all ages and fitness levels. Whether you're here to improve your skills, get in shape, or simply enjoy the sport, we've got you covered.
      </Typography>
      
      
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4} style={{ margin: '0 10px' }}>
          <img src={process.env.PUBLIC_URL + '/images/boxing.jpg'} alt="Muhammad Ali" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="body2" align="center">Muhammad Ali</Typography>
          <Typography variant="body2" align="center">Join our boxing club</Typography>
          <Typography variant="body2" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum consectetur velit eget vulputate.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ margin: '0 10px' }}>
          <img src={process.env.PUBLIC_URL + '/images/homepage.jpg'} alt="Boxing" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="body2" align="center">Boxing</Typography>
          <Typography variant="body2" align="center">Join our boxing club</Typography>
          <Typography variant="body2" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum consectetur velit eget vulputate.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ margin: '0 10px' }}>
          <img src={process.env.PUBLIC_URL + '/images/fight.jpg'} alt="Fight" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="body2" align="center">Fight</Typography>
          <Typography variant="body2" align="center">Join our boxing club</Typography>
          <Typography variant="body2" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum consectetur velit eget vulputate.</Typography>
        </Grid>
      </Grid>

      <div style={{ marginTop: '150px', marginBottom: '150px' }}>
        <ParagraphComponent text="Boxing, also known as the sweet science, is a combat sport that involves two opponents throwing punches at each other with gloved hands. It is a physically demanding sport that requires speed, strength, agility, and endurance. Boxing is not only a sport but also a form of self-defense and a means of physical fitness. It teaches discipline, focus, and determination, making it an excellent activity for people of all ages. Whether you're training for competition or simply looking to improve your fitness level, boxing offers a challenging and rewarding experience." />
      </div>

      
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" align="center">Cardio Trainings</Typography>
              <img src={process.env.PUBLIC_URL + '/images/grouprun.jpg'} alt="Training 1" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" align="center">Boxing 101</Typography>
              <img src={process.env.PUBLIC_URL + '/images/gym2.jpg'} alt="Training 2" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }} fullWidth component={Link} to="/Contact">Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
