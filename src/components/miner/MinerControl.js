import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography
} from '@material-ui/core';

const MinerControl = (props) => {
  const [values, setValues] = useState({
    address: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value.trim()
    });
  };


  return (
    <form {...props}>
      <Card>
        <CardHeader
          title={`Config your server`}
          subheader="Get your public key, connect to another server or stop your server"
        />
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            style={{ marginRight: '10px', marginTop: '10px' }}
          >
            Get Public Key
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ marginRight: '10px', marginTop: '10px' }}
          >
            connect with another server
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ marginRight: '10px', marginTop: '10px' }}
          >
            Stop server
          </Button>

        </Box>
      </Card>
    </form>
  );
};

export default MinerControl;
