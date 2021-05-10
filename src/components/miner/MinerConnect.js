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

const MinerConnect = (props) => {
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
          title={`Connect to your blockchain server`}
          subheader="Enter your server's address to connect. For example: http://abc.com"
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
        </CardContent>
      </Card>
    </form>
  );
};

export default MinerConnect;
