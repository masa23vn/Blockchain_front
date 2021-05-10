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
import { createTransaction } from '../../helper/sign';
import { LINK } from '../../constant/constant'
import axios from 'axios';

const WalletsTransfer = (props) => {
  const [values, setValues] = useState({
    private: '',
    address: '',
    amount: ''
  });
  const [errors, setErrors] = useState({
    private: '',
    address: '',
    amount: ''
  })

  const handleChange = (event) => {
    if (event.target.value.trim() !== '') {
      setErrors({
        ...errors,
        [event.target.name]: ''
      });
    }

    setValues({
      ...values,
      [event.target.name]: event.target.value.trim()
    });
  };


  const sendTransaction = () => {
    if (values.private === '') {
      setErrors({
        ...errors,
        private: "This field can't be blank."
      })
      return
    }
    if (values.address === '') {
      setErrors({
        ...errors,
        address: "This field can't be blank."
      })
      return
    }
    if (values.amount === '') {
      setErrors({
        ...errors,
        amount: "This field can't be blank."
      })
      return
    }

    if (isNaN(values.amount)) {
      setErrors({
        ...errors,
        amount: "This field must be integer number."
      })
      return
    }

    // get unSpent
    axios.get(`${LINK.API}/unSpent`)
      .then(function (res) {
        const unSpent = res.data
        // get transaction pool
        axios.get(`${LINK.API}/pool`)
          .then(function (res) {
            const pool = res.data
            try {
              // create and sign transaction locally
              const tx = createTransaction(values.address, Number(values.amount), values.private, unSpent, pool)
              console.log(tx)
              // send transaction to server
              axios.post(`${LINK.API}/sendTransactionGuess`, { transaction: tx })
                .then(function (res) {
                  handleOpen("Created transaction successfully. Now wait for someone to mine it", "success");
                })
                .catch(function (err) {
                  handleOpen(err.message, "error");
                })
            } catch (err) {
              handleOpen(err.message, "error");
            }
          })
          .catch(function (err) {
            handleOpen(err.message, "error");
          })
      })
      .catch(function (err) {
        handleOpen(err.message, "error");
      })
  }


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
            title="Create new transaction"
            subheader="Your private key will be only on your browser and will be deleted when you close this tab or clear caches"
          />
          <Divider />
          <CardContent>
            <TextField
              fullWidth
              label="Private Key"
              margin="normal"
              name="private"
              onChange={handleChange}
              value={values.private}
              variant="outlined"
              error={errors.private !== ''}
              helperText={errors.private}
            />
            <TextField
              fullWidth
              label="Address"
              margin="normal"
              name="address"
              onChange={handleChange}
              value={values.address}
              variant="outlined"
              error={errors.address !== ''}
              helperText={errors.address}
            />
            <TextField
              fullWidth
              label="Amount"
              margin="normal"
              name="amount"
              onChange={handleChange}
              value={values.amount}
              variant="outlined"
              error={errors.amount !== ''}
              helperText={errors.amount}
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
              onClick={() => sendTransaction()}
            >
              Create
          </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};

export default WalletsTransfer;
