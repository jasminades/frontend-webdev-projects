import React from 'react';
import { Link } from 'react-router-dom'; 
import { Card, CardContent, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <div style={{ marginLeft: '70px', marginRight: '70px' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            About Our Boxing Club
          </Typography>
          <Typography variant="body2" component="p">
            Welcome to our Boxing Club! We are a community of boxing enthusiasts dedicated to promoting fitness, discipline, and camaraderie through the sport of boxing. Our club provides top-notch training facilities, experienced coaches, and a supportive environment for all skill levels.
          </Typography>
          <Typography variant="body2" component="p">
            Whether you're a beginner looking to learn the basics or an experienced boxer striving for excellence, our club has something to offer you. Join us on this exciting journey!
          </Typography>
          <Typography variant="body2" component="p">
            Boxing is a sport that demands dedication, perseverance, and mental toughness. It's not just about physical strength; it's also about strategy, agility, and quick thinking. At our club, we focus on honing all aspects of boxing, from footwork to punching technique, to help you become the best boxer you can be.
          </Typography>
          <Typography variant="body2" component="p">
            Join us today and discover the transformative power of boxing!
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/gym2.jpg'} alt="Boxing 1" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
              <Typography variant="body2" component="p">
                Boxing Training
              </Typography>
              <Button 
                variant="contained" 
                style={{ backgroundColor: '#8B0000', color: 'white' }}
                component={Link} 
                to="/Trainings"
              >
                Explore
              </Button>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/gloves.jpg'} alt="Boxing 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
              <Typography variant="body2" component="p">
                Boxing Equipment
              </Typography>
              <Button 
                variant="contained" 
                style={{ backgroundColor: '#8B0000', color: 'white' }}
                component={Link} 
                to="/Equipment"
              >
                Discover
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="body2" component="p">
            Welcome to our Boxing Club! We are a community of boxing enthusiasts dedicated to promoting fitness, discipline, and camaraderie through the sport of boxing. Our club provides top-notch training facilities, experienced coaches, and a supportive environment for all skill levels.
          </Typography>
          <Typography variant="body2" component="p">
            Whether you're a beginner looking to learn the basics or an experienced boxer striving for excellence, our club has something to offer you. Join us on this exciting journey!
          </Typography>
          <Typography variant="body2" component="p">
            Boxing is a sport that demands dedication, perseverance, and mental toughness. It's not just about physical strength; it's also about strategy, agility, and quick thinking. At our club, we focus on honing all aspects of boxing, from footwork to punching technique, to help you become the best boxer you can be.
          </Typography>
          <Typography variant="body2" component="p">
            Join us today and discover the transformative power of boxing!
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/gym2.jpg'} alt="Boxing 1" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
              <Typography variant="body2" component="p">
                Boxing Training
              </Typography>
              <Button 
                variant="contained" 
                style={{ backgroundColor: '#8B0000', color: 'white' }}
                component={Link} 
                to="/Trainings"
              >
                Explore
              </Button>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/gloves.jpg'} alt="Boxing 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
              <Typography variant="body2" component="p">
                Boxing Equipment
              </Typography>
              <Button 
                variant="contained" 
                style={{ backgroundColor: '#8B0000', color: 'white' }}
                component={Link} 
                to="/Equipment"
              >
                Discover
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    
  );
  
}

export default About;
