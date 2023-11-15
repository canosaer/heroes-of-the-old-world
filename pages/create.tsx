/*
NAME: create
DESCRIPTION:
*/

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/system';
import DataLoader from '../components/DataLoader';
import { Typography, Paper, Stack, Button, TextField, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { playableSpecies } from '../data/playableSpecies'

export default function Create() {
  const [name, setName] = useState('');
  const [playerSpecies, setPlayerSpecies] = useState('human');
  const [playerPortrait, setPlayerPortrait] = useState('');
  const [portraits, setPortraits] = useState([]);

  useEffect(() => {

  }, [playerSpecies]);

  return (
    <Box className="create" component="main">
      <DataLoader />
      <Typography className="create__heading" variant="h4" textAlign="center">Character Creation</Typography>
      <Paper className="chargen" component="section">
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
            onChange={(e)=>setPlayerSpecies(e.target.value)}
          >
            {playableSpecies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Stack>
      </Paper>
      
    </Box>
  )
}