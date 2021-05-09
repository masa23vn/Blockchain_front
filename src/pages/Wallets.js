import { Helmet } from 'react-helmet';
import React, { useState, useEffect, useContext } from 'react';
import { Box, Container } from '@material-ui/core';
import WalletsTitle from '../components/wallets/WalletsTitle';
import WalletsTransfer from '../components/wallets/WalletsTransfer';


const WalletsView = () => {

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
          <Box sx={{ pt: 3 }}>
            <WalletsTitle />
          </Box>
          <Box sx={{ pt: 3 }}>
            <WalletsTransfer/>
          </Box>
        </Container>
      </Box>
    </>
  )
};

export default WalletsView;
