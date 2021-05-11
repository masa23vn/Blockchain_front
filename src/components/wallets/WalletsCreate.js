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
import { encryptPrivateKey  } from '../../helper/sign';

const WalletsCreate = (props) => {
  const [values, setValues] = useState({
    password: '',
  });
  const [errors, setErrors] = useState({
    password: '',
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

  const handleCreate = () => {
    if (values.password === '') {
      setErrors({
        ...errors,
        password: "This field can't be blank."
      })
      return
    }

    const encrypted = encryptPrivateKey(values?.password);
    handleOpen("Your encrypted privateKey: " + encrypted, "success")
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
            title="Create wallet"
            subheader="Enter password We will create it for you."
          />
          <Divider />
          <CardContent>
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              name="password"
              onChange={handleChange}
              value={values.password}
              variant="outlined"
              error={errors.password !== ''}
              helperText={errors.password}
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
              onClick={() => handleCreate()}
            >
              Create
          </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};

export default WalletsCreate;
