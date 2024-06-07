import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form submission (e.g., send data to server)
      console.log(formData);
      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div style={{ marginLeft: '70px', marginRight: '70px' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Contact Our Boxing Club
          </Typography>
          <Typography variant="body2" component="p">
            Get in touch with us! Fill out the form below and our team will reach out to you.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField 
              id="name" 
              name="name" 
              label="Name" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={formData.name} 
              onChange={handleChange} 
              error={!!errors.name} 
              helperText={errors.name}
            />
            <TextField 
              id="email" 
              name="email" 
              label="Email" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={formData.email} 
              onChange={handleChange} 
              error={!!errors.email} 
              helperText={errors.email}
            />
            <TextField 
              id="message" 
              name="message" 
              label="Message" 
              variant="outlined" 
              fullWidth 
              multiline 
              rows={4} 
              margin="normal" 
              value={formData.message} 
              onChange={handleChange} 
              error={!!errors.message} 
              helperText={errors.message}
            />
            <Button type="submit" variant="contained" style={{ backgroundColor: '#8B0000', color: 'white' }}>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
