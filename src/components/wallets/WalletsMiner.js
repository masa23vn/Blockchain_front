import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Snackbar,
  Alert
} from '@material-ui/core';
import { getPublicKey, decryptPrivateKey  } from '../../helper/sign';
import { LINK } from '../../constant/constant'
import axios from 'axios';

const WalletsMiner = (props) => {
  const { encryphted, password } = props
  // snack bar
  const [open, setOpen] = useState(false);
  const [snackMess, setSnackMess] = useState('');
  const [snackType, setSnackType] = useState('error');
  const handleOpen = (snackMess, snackType) => {
    setSnackMess(snackMess);
    setSnackType(snackType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMine = () => {
    try {
    const privateKey = decryptPrivateKey(encryphted, password);
    const publicKey = getPublicKey(privateKey)
    axios.post(`${LINK.API}/mineBlockGuess`, { address: publicKey })
      .then(function (res) {
        handleOpen("Start mining", "success");
      })
      .catch(function (err) {
        if (err?.response) {
          handleOpen(err?.response?.data, "error");

        }
        else {
          handleOpen(err.message, "error");

        }
      })
    } catch (error) {
      handleOpen(error.message, 'error')
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={'topcenter'}
      >
        <Alert onClose={handleClose} severity={snackType}>
          {snackMess}
        </Alert>
      </Snackbar>

      <form>
        <Card>
          <CardHeader
            title="Mine Coin"
            subheader="Start mining at our server"
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
              onClick={() => handleMine()}
            >
              Start mining
          </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};

export default WalletsMiner;
