import React from 'react';
import { Typography } from '@mui/material';

const ParagraphComponent = ({ text }) => {
  return (
    <Typography variant="body2" align="center">
      {text}
    </Typography>
  );
}

export default ParagraphComponent;
