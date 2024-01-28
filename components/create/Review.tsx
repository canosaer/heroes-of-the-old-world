import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import { playableSpecies } from '../../data/characters/playableSpecies';
import { portraits } from '../../data/characters/portraits';
import { capitalizeFirstLetter } from '../../lib/utilities';

export default function Review() {
    const [ store, dispatch ] = useContext(Context);
    const playerSpecies = store?.playerCharacter.species as keyof typeof portraits;
    const portraitArray = portraits[playerSpecies];

    useEffect(() => {
    if (portraitArray && portraitArray.length > 0) {
        dispatch ({ type: 'SET_PORTRAIT', payload: 0 })
    }
    }, [portraitArray, dispatch]);

    // useEffect(() => {
    //     console.log(store)
    // }, [store]);

    return (
        <Stack className="review" component="form" noValidate autoComplete="off">
            <Typography className="name" variant="h6">Name: {store.playerCharacter.name}</Typography>
            <Typography className="name" variant="h6">Species: {capitalizeFirstLetter(store.playerCharacter.species)}</Typography>
            <Box className="portrait">
                <Typography className="portrait__heading" variant="h6">Portrait</Typography>
                <Card className="portrait__frame">
                    <CardMedia
                        className="portrait__image"
                        component="img"
                        sx={{ width: 151 }}
                        image={
                            portraitArray
                                ? portraitArray[store.playerCharacter.playerPortraitIndex]
                                : ''
                        }
                        alt=""
                    />
                </Card>
            </Box>
            <Box className="traits">

            </Box>
            <Box className="features">
                <Typography className="features__heading" variant="h6" sx={{ mb: 1 }}>
                    Features
                 </Typography>
                {playableSpecies
                    .find(species => species.value === store.playerCharacter.species)
                    ?.features.map((feature, index) => (
                        <Box className="item" key={index} sx={{ mb: 2 }}>
                            <Typography className="item__heading" sx={{ mb: 1 }}>
                                {feature.heading}
                            </Typography>
                            <Typography className="item__text">
                                {feature.text}
                            </Typography>
                        </Box>
                ))}
            </Box>
        </Stack>
    )
}