/*
NAME: MainMenu
DESCRIPTION:
*/

import { useContext } from 'react';
import { Context } from '../../context/store';
import { Stack, Button } from '@mui/material';
import Link from 'next/link';

export default function MainMenu() {
  const [store, dispatch] = useContext(Context);

  return (
    <Stack className="menu" component={"section"} spacing={3} >
        <Link className="menu__link" href="/create"><Button className="menu__option" variant="contained">New Game</Button></Link>
        <Button className="menu__option" variant="contained" disabled={!store.data}>Continue Game</Button>
        <Link className="menu__link" href="/quick-battle"><Button className="menu__option" variant="contained">Quick Battle</Button></Link>
    </Stack>
  )
}
