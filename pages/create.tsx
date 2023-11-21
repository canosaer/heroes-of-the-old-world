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
import { playableSpecies } from '../data/playableSpecies'
import { portraits } from '../data/portraits'
import LinearProgressWithLabel from '../components/create/LinearProgressWithLabel';


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
        <Stack className="chargen__inputs" component="form" noValidate autoComplete="off">
          <TextField 
            className="chargen__name" 
            component="data" label="Name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField 
            className="chargen__species" 
            component="data" 
            select 
            label="Species" 
            value={playerSpecies}
            SelectProps={{
              native: true,
            }}
            onChange={(e) => setPlayerSpecies(e.target.value as "human" | "dwarf" | "drake" | "elf")}
          >
            {playableSpecies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Card className="portrait" component="figure">
            <CardContent className="heading">
              <Typography className="heading__text" variant="h6">
                Portrait
              </Typography>
            </CardContent>
            <CardMedia
              className="portrait__image"
              component="img"
              sx={{ width: 151 }}
              image={portraitArray ? portraitArray[playerPortraitIndex] : ''}
              alt=""
            />
            <Box className="controls" sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton
                className="controls__button controls__button_prev"
                aria-label="previous"
                onClick={() => {
                  setPlayerPortraitIndex((prevIndex) =>
                    prevIndex === 0 ? portraitArray.length - 1 : prevIndex - 1
                  );
                }}
              >
                <NavigateBefore className="controls__icon controls__icon_prev" />
              </IconButton>
              <IconButton
                className="controls__button controls__button_next"
                aria-label="next"
                onClick={() => {
                  setPlayerPortraitIndex((prevIndex) =>
                    prevIndex === portraitArray.length - 1 ? 0 : prevIndex + 1
                  );
                }}
              >
                <NavigateNext className="controls__icon controls__icon_prev" />
              </IconButton>
            </Box>
          </Card>
        </Stack>
        {/* <LinearProgressWithLabel value={0} /> */}
      </Paper>
      
    </Box>
  )
}