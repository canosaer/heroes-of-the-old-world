/*
NAME: index
DESCRIPTION:
*/
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/system';
import { Typography, Paper, Stack, Button } from '@mui/material';
import DataLoader from '../components/DataLoader';

export default function Home() {

  const homeStyles = {
    display: 'grid',
    gridAutoRows: 'max-content',
    gridTemplateColumns: '1fr',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: '#113E53',
    padding: '5rem 1rem 0rem',
  }

  const homeTitleStyles = {
    color: 'whitesmoke',
    fontFamily: "'Prata', serif",
  }

  return (
    <Box component="main" sx={homeStyles}>
      <DataLoader />
      <Typography sx={homeTitleStyles} className="home__title" variant="h3" textAlign="center">Heroes of the Old World</Typography>
      <Stack>
        <Button variant="contained">New Game</Button>
        <Button variant="contained" disabled>Continue Game</Button>
      </Stack>
    </Box>
  )
}