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

const MinerTransfer = (props) => {
  const [values, setValues] = useState({
    address: '',
    amount: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value.trim()
    });
  };


  return (
    <form>
      <Card>
        <CardHeader
          title="Create new transaction"
          subheader="Send your coin to another address"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Address"
            margin="normal"
            name="address"
            onChange={handleChange}
            value={values.address}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Amount"
            margin="normal"
            name="amount"
            onChange={handleChange}
            value={values.amount}
            variant="outlined"
          />
        </CardContent>
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
            style={{ marginRight: '10px' }}
          >
            Check Balance
        </Button>

          <Button
            color="primary"
            variant="contained"
          >
            Create
        </Button>
        </Box>
      </Card>
    </form>
  );
};

export default MinerTransfer;
