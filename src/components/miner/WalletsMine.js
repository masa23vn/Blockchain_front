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

const WalletsMine = (props) => {
  const [numOfTx, setNumOfTx] = useState(10)

  return (
    <form {...props}>
      <Card>
        <CardHeader
          title={`Mining Block ( Currently found ${numOfTx} transactions )`}
          subheader="Mine block to get reward"
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
          >
            Start Mining
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default WalletsMine;
