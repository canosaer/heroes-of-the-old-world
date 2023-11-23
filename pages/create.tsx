/*
NAME: create
DESCRIPTION:
*/

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/system';
import DataLoader from '../components/DataLoader';
import { Typography, Paper, Stack, Button, TextField, Card, CardContent, CardMedia, IconButton, Tabs, Tab } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import { playableSpecies } from '../data/create/playableSpecies'
import { portraits } from '../data/create/portraits'
import LinearProgressWithLabel from '../components/create/LinearProgressWithLabel';
import Basics from '../components/create/Basics'
import Edges from '../components/create/Edges'
import Traits from '../components/create/Traits'

export default function Create() {
  const [name, setName] = useState('');
  const [playerSpecies, setPlayerSpecies] = useState<keyof typeof portraits>('human');
  const [playerPortraitIndex, setPlayerPortraitIndex] = useState(0);
  const [tab, setTab] = useState(0);

  const portraitArray = portraits[playerSpecies];

  const switchTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    if (portraitArray && portraitArray.length > 0) {
      setPlayerPortraitIndex(0);
    }
  }, [portraitArray]);

  // useEffect(() => {
  //   console.log(tab)
  // }, [tab]);

  return (
    <Box className="create" component="main">
      <DataLoader />
      <Typography className="create__heading" variant="h4" textAlign="center">Character Creation</Typography>
      <Paper className="chargen" component="section">
        <Tabs value={tab} onChange={switchTab} centered>
          <Tab label="Basics" />
          <Tab label="Edges" />
          <Tab label="Traits" />
        </Tabs>
        {tab === 0 && <Basics />}
        {tab === 1 && <Edges />}
        {tab === 2 && <Traits />}
        {/* <LinearProgressWithLabel value={0} /> */}
      </Paper>
      
    </Box>
  )
}