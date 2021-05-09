import { Helmet } from 'react-helmet';
import React, { useState, useEffect, useContext } from 'react';
import { Box, Container } from '@material-ui/core';
import MinerTitle from '../components/miner/MinerTitle';


const Miner = () => {

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
            <MinerTitle />
          </Box>
          <Box sx={{ pt: 3 }}>
          </Box>
          <Box sx={{ pt: 3 }}>
          </Box>
        </Container>
      </Box>
    </>
  )
};

export default Miner;
