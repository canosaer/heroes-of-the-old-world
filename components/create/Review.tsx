import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton, Rating, Chip, Button } from '@mui/material';
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
        <Box className="review">
            <Typography className="name" variant="h6">
                Name: <span className="name__value">{store.playerCharacter.name}</span>
            </Typography>
            <Typography className="species" variant="h6">
                Species: <span className="species__value">{capitalizeFirstLetter(store.playerCharacter.species)}</span>
            </Typography>

            <Box className="portrait">
                <Typography className="portrait__heading" variant="h6">
                    Portrait
                </Typography>
                <Card className="portrait__frame">
                    <CardMedia
                        className="portrait__image"
                        component="img"
                        sx={{ width: 151 }}
                        image={portraitArray ? portraitArray[store.playerCharacter.playerPortraitIndex] : ''}
                        alt=""
                    />
                </Card>
            </Box>

            <Button variant="contained" onClick={()=>console.log(store)}>Start Game</Button>

            <Box className="traits">
                {Object.entries(store.playerCharacter.traits).map(([abilityName, ability]) => (
                    <Box className="trait" key={abilityName}>
                        <Typography className="trait__name">{capitalizeFirstLetter(abilityName)}</Typography>
                        <Rating
                            className="trait__rating"
                            name="simple-controlled"
                            value={ability.rank}
                            max={ability.rank}
                            readOnly
                        />
                        <Box className="skills">
                            {Object.entries(ability.skills)
                                .filter(([_, skillValue]) => skillValue > 0)
                                .map(([skillName, skillValue]) => (
                                    <Box className="skill" key={skillName}>
                                        <Typography className="skill__name">{capitalizeFirstLetter(skillName)}</Typography>
                                        <Rating
                                            className="skill__rating"
                                            name="simple-controlled"
                                            value={skillValue}
                                            max={skillValue}
                                            readOnly
                                        />
                                    </Box>
                                ))}
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box className="spells">
                {store.playerCharacter.spells
                    .filter((spell) => spell.rank > 0)
                    .map((spell) => (
                        <Box className="spell" key={spell.name}>
                            <Typography className="spell__name">{capitalizeFirstLetter(spell.name)}</Typography>
                            <Rating
                                className="spell__rating"
                                name="simple-controlled"
                                value={spell.rank}
                                max={spell.rank}
                                readOnly
                            />
                        </Box>
                    ))}
            </Box>

            <Box className="edges">
                {store.playerCharacter.edges.map((edge, index) => (
                    <Chip key={index} label={capitalizeFirstLetter(edge)} sx={{ mr: 1, mb: 1 }} />
                ))}
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
                            <Typography className="item__text">{feature.text}</Typography>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
}