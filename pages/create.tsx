/*
NAME: create
DESCRIPTION:
*/

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/system';
import { Typography, Paper, Stack, Button, TextField } from '@mui/material';
import DataLoader from '../components/DataLoader';

export default function Create() {
  const [name, setName] = useState('');

  return (
    <Box className="create" component="main">
      <DataLoader />
      <Typography className="create__heading" variant="h4" textAlign="center">Character Creation</Typography>
      <Paper className="chargen" component="section">
        <Stack className="chargen__inputs" component="form" noValidate autoComplete="off">
          <TextField className="chargen__name" component="data" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/>

        </Stack>
      </Paper>
      
    </Box>
  )
}