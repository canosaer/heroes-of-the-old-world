/*
NAME: index
DESCRIPTION:
*/
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import DataLoader from '../components/DataLoader';

export default function Home() {

  const defaultGrid = {
    display: 'grid',
    gridAutoRows: 'auto',
    gridTemplateColumns: '1fr',
  }

  return (
    <Box component="main" sx={defaultGrid} className="home">
      <DataLoader />
    </Box>
  )
}