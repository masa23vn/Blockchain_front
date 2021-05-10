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

const MinerTitle = (props) => {
  return (
    <form>
      <Card>
        <CardHeader
          title="For users who have your own server"
        />
        <Divider />
      </Card>
    </form>
  );
};

export default MinerTitle;
