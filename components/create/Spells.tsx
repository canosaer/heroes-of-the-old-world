import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton, Rating } from '@mui/material';
import { spells } from '../../data/characters/spells';
import { capitalizeFirstLetter } from '../../lib/utilities';
import { CreateTooltip } from './CreateTooltips';

export default function Spells() {
    const [store, dispatch] = useContext(Context);

    const handleSpellChange = (spellName: string, newValue: number | null) => {
        const currentSpell = store.playerCharacter.spells.find((spell) => spell.name === spellName);
    
        if (currentSpell) {
            const currentRank = currentSpell.rank;
    
            // Use 0 as the default value if newValue is null
            const newRank = newValue !== null ? newValue : 0;

            const improvementPointChange = (newRank - currentRank) * 2;
            const newImprovementPoints = store.playerCharacter.improvementPoints - improvementPointChange;
    
            dispatch({
                type: 'UPDATE_SPELL_RANK',
                payload: {
                    spellName: spellName,
                    spellRank: newRank,
                },
            });
    
            // Make sure to set the value prop of Rating to the newRank
            dispatch({
                type: 'UPDATE_IMPROVEMENT_POINTS',
                payload: newImprovementPoints,
            });
        }
    };

    useEffect(() => {
        console.log(store)
    }, [store]);

    return (
        <Stack className="spells" component="form" noValidate autoComplete="off">
            <Card className="points">
                <Typography className="points__display" variant="h6">Improvement Points: {store.playerCharacter.improvementPoints}</Typography>
            </Card>
            <Card className="spells__category">
                {store.playerCharacter.spells.map((spell) => {

                    let maxValue = spell.rank + Math.floor(store.playerCharacter.improvementPoints / 2)
                    if(spell.rank > maxValue) maxValue = spell.rank
                    if(maxValue > 5) maxValue = 5

                    return (
                        <Box className="spell" key={spell.name}>
                            <Box className="spell__heading">
                                <CreateTooltip className="spell__tooltip" placement="right-start" title={''}>
                                    <Typography className="spell__name">
                                        {spell.name}
                                    </Typography>
                                </CreateTooltip>
                            </Box>
                            <Rating
                                className="spell__rating"
                                name="simple-controlled"
                                value={spell.rank}
                                onChange={(e, newValue) => handleSpellChange(spell.name, newValue) }
                                max={maxValue}
                            />
                        </Box>
                    );
                })}
            </Card>
        </Stack>
    )
}