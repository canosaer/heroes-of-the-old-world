import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import { playableSpecies } from '../../data/create/playableSpecies';
import { portraits } from '../../data/create/portraits';

export default function Create() {
    const [ store, dispatch ] = useContext(Context);
    const playerSpecies = store?.playerCharacter.playerSpecies as keyof typeof portraits;
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
        <Stack className="basics" component="form" noValidate autoComplete="off">
            <TextField 
                className="name" 
                component="data" label="Name" 
                value={store.playerCharacter.name} 
                onChange={(e) => dispatch ({ type: 'SET_NAME', payload: e.target.value })}
            />
            <TextField 
                className="species" 
                component="data" 
                select 
                label="Species" 
                value={store.playerCharacter.playerSpecies}
                SelectProps={{
                    native: true,
                }}
                onChange={(e) => dispatch ({ type: 'SET_SPECIES', payload: e.target.value as "human" | "dwarf" | "drake" | "elf" })}
            >
            {playableSpecies.map((option) => (
                <option className="species__option" key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
            </TextField>
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
                <Box className="controls" sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton
                        className="controls__button controls__button_prev"
                        aria-label="previous"
                        onClick={() => {
                            dispatch({
                                type: 'SET_PORTRAIT',
                                payload:
                                    store.playerCharacter.playerPortraitIndex === 0
                                        ? portraitArray.length - 1
                                        : store.playerCharacter.playerPortraitIndex - 1
                            });
                        }}
                    >
                        <NavigateBefore className="controls__icon controls__icon_prev" />
                    </IconButton>
                    <IconButton
                        className="controls__button controls__button_next"
                        aria-label="next"
                        onClick={() => {
                            dispatch({
                                type: 'SET_PORTRAIT',
                                payload:
                                    store.playerCharacter.playerPortraitIndex === portraitArray.length - 1
                                        ? 0
                                        : store.playerCharacter.playerPortraitIndex + 1
                            });
                        }}
                    >
                        <NavigateNext className="controls__icon controls__icon_prev" />
                    </IconButton>
                </Box>
            </Box>
            <Box className="features">
                <Typography className="features__heading" variant="h6" sx={{ mb: 1 }}>
                    Features
                 </Typography>
                {playableSpecies
                    .find(species => species.value === store.playerCharacter.playerSpecies)
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