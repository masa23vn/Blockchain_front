import { Helmet } from 'react-helmet';
import React, { useState, useEffect, useContext } from 'react';
import { Box, Container } from '@material-ui/core';
import WalletsTransfer from '../components/wallets/WalletsTransfer';
import WalletsMiner from '../components/wallets/WalletsMiner';
import WalletsCreate from '../components/wallets/WalletsCreate';
import WalletsLogin from '../components/wallets/WalletsLogin';


const WalletsView = () => {
  const [values, setValues] = useState({
    encryphted: '',
    password: '',
  });

  return (
    <>
      <Helmet>
        <title>Wallets | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <h3 style={{ marginLeft: 15 }}>Don't have a wallet ?</h3>
          <Box sx={{ pt: 3 }}>
            <WalletsCreate />
          </Box>
          <h3 style={{ marginTop: 20, marginLeft: 15 }}>Using your wallet</h3>
          <Box sx={{ pt: 3 }}>
            <WalletsLogin encryphted={values.encryphted} password={values.password} setValues={setValues} />
          </Box>
          <Box sx={{ pt: 3 }}>
            <WalletsTransfer encryphted={values.encryphted} password={values.password} />
          </Box>
          <Box sx={{ pt: 3 }}>
            <WalletsMiner encryphted={values.encryphted} password={values.password} />
          </Box>

        </Container>
      </Box>
    </>
  )
};

export default WalletsView;
