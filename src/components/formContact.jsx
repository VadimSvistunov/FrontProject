import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        width: 500,
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="fullWidth"
          label="Your Name"
          onChange={handleChange}
        />
        <TextField
        label="Your Email"
         id="fullWidth"
         onChange={handleChange}

        />
        <TextField
          id="outlined-multiline-flexible"
          label="Subject"
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Your Message"
          multiline
          rows={10}

        />
      </div>
      
    </Box>
  );
}