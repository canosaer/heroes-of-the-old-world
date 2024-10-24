/*
NAME: index
DESCRIPTION:
*/

import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import DataLoader from '../components/DataLoader';
import MainMenu from '../components/home/MainMenu'

export default function Home() {

  return (
    <Box className="home" component="main">
      <DataLoader />
      <Typography className="home__title" variant="h3" textAlign="center">Heroes of the Old World</Typography>
      <MainMenu />
    </Box>
  )
}