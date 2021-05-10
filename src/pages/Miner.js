import { Helmet } from 'react-helmet';
import React, { useState, useEffect, useContext } from 'react';
import { Box, Container } from '@material-ui/core';
import MinerTitle from '../components/miner/MinerTitle';
import MinerConnect from '../components/miner/MinerConnect';
import MinerTransfer from '../components/miner/MinerTransfer';
import MinerControl from '../components/miner/MinerControl';
import MinerMining from '../components/miner/MinerMining';


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
            <MinerConnect />
          </Box>
          <Box sx={{ pt: 3 }}>
            <MinerControl />
          </Box>
          <Box sx={{ pt: 3 }}>
            <MinerTransfer />
          </Box>
          <Box sx={{ pt: 3 }}>
            <MinerMining />
          </Box>

        </Container>
      </Box>
    </>
  )
};

export default Miner;
