import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton, Rating } from '@mui/material';

export default function Traits() {
    const [ store, dispatch ] = useContext(Context);
    const [ attributePoints, setAttributePoints ] = useState(5);

    useEffect(() => {
        let newPointsAvailable = 5;
        const agilityPoints = store.playerCharacter.traits.agility.rank - 1
        const smartsPoints = store.playerCharacter.traits.smarts.rank - 1
        const strengthPoints = store.playerCharacter.traits.strength.rank - 1
        const spiritPoints = store.playerCharacter.traits.spirit.rank - 1
        const vigorPoints = store.playerCharacter.traits.vigor.rank - 1

        newPointsAvailable = newPointsAvailable - (agilityPoints + smartsPoints + strengthPoints + spiritPoints + vigorPoints)
        console.log(newPointsAvailable)
        setAttributePoints(newPointsAvailable)
    }, [store.playerCharacter.traits]);
    
    return (
        <Stack className="traits" component="form" noValidate autoComplete="off">
            <Card className="attribute">
                <Typography className="attribute__heading">Agility</Typography>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.agility.rank}
                    onChange={(e, newValue) => dispatch ({ type: 'SET_AGILITY', payload: newValue})}
                    max={store.playerCharacter.traits.agility.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.agility.rank + attributePoints}
                />
            </Card>
            <Card className="attribute">
                <Typography className="attribute__heading">Smarts</Typography>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.smarts.rank}
                    onChange={(e, newValue) => dispatch ({ type: 'SET_SMARTS', payload: newValue})}
                    max={store.playerCharacter.traits.smarts.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.smarts.rank + attributePoints}
                />
            </Card>
            <Card className="attribute">
                <Typography className="attribute__heading">Spirit</Typography>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.spirit.rank}
                    onChange={(e, newValue) => dispatch ({ type: 'SET_SPIRIT', payload: newValue})}
                    max={store.playerCharacter.traits.spirit.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.spirit.rank + attributePoints}
                />
            </Card>
            <Card className="attribute">
                <Typography className="attribute__heading">Strength</Typography>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.strength.rank}
                    onChange={(e, newValue) => dispatch ({ type: 'SET_STRENGTH', payload: newValue})}
                    max={store.playerCharacter.traits.strength.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.strength.rank + attributePoints}
                />
            </Card>
            <Card className="attribute">
                <Typography className="attribute__heading">Vigor</Typography>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.vigor.rank}
                    onChange={(e, newValue) => dispatch ({ type: 'SET_VIGOR', payload: newValue})}
                    max={store.playerCharacter.traits.vigor.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.vigor.rank + attributePoints}
                />
            </Card>
        </Stack>
    )
}