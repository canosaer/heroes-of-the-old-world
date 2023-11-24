import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton } from '@mui/material';

export default function Edges() {
    const [ store, dispatch ] = useContext(Context);

    return (
        <Stack className="edges" component="form" noValidate autoComplete="off">

        </Stack>
    )
}