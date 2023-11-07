/*
NAME: index
DESCRIPTION:
*/
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DataLoader from '../components/DataLoader';

export default function Home() {

  const homeStyles = {
    display: 'grid',
    gridAutoRows: 'auto',
    gridTemplateColumns: '1fr',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: '#113E53',
    padding: '5rem 0.75rem 0rem 0.5rem',
  }

  const homeTitleStyles = {
    color: 'whitesmoke',
    fontFamily: "'Prata', serif",
  }

  return (
    <Box component="main" sx={homeStyles}>
      <DataLoader />
      <Typography sx={homeTitleStyles} className="home__title" variant="h3" textAlign="center">Heroes of the Old World</Typography>
    </Box>
  )
}