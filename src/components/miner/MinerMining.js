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

const MinerMining = (props) => {
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
          title={`Mining`}
          subheader="Mining unconfirmed transaction to get more coin"
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
            Get number of unconfirmed transaction
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ marginRight: '10px', marginTop: '10px' }}
          >
            Start mining
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default MinerMining;
