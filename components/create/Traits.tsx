import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton } from '@mui/material';

export default function Traits() {
    const [ store, dispatch ] = useContext(Context);

    return (
        <Stack className="traits" component="form" noValidate autoComplete="off">
            <Card className="agility">
                <Typography>BLAH!</Typography>
            </Card>
        </Stack>
    )
}