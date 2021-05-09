import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';

const WalletsTitle = (props) => {
  const { privateKey, setPrivateKey } = props

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form>
      <Card>
        <CardHeader
          title="Using our server to create new transaction"
          subheader="Your private key is only saved local and will be deleted when you close this tab or clear caches"
        />
        <Divider />
      </Card>
    </form>
  );
};

export default WalletsTitle;
