import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, Card, Button, Rating } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles';
import { defaultTraits } from '../../data/characters/defaultTraits' 

export default function Traits() {
    const [ store, dispatch ] = useContext(Context);
    const [ attributePoints, setAttributePoints ] = useState(5);

    const AttributeTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[1],
          fontSize: 13,
          maxWidth: 190,
        },
    }));

    const handleSkillChange = (skillCategory: string, skillName: string, newValue: number) => {
        console.log(`skill name: ${skillName}, value: ${newValue}`)
        dispatch({ type: `UPDATE_${skillCategory.toUpperCase()}_SKILL`, payload: { skillName, skillValue: newValue } });
    };

    const capitalizeFirstLetter = (incomingString: string) => {
        return incomingString.charAt(0).toUpperCase() + incomingString.slice(1);
    };

    useEffect(() => {
        let newPointsAvailable = 5;
        const agilityPoints = store.playerCharacter.traits.agility.rank - 1
        const smartsPoints = store.playerCharacter.traits.smarts.rank - 1
        const strengthPoints = store.playerCharacter.traits.strength.rank - 1
        const spiritPoints = store.playerCharacter.traits.spirit.rank - 1
        const vigorPoints = store.playerCharacter.traits.vigor.rank - 1

        newPointsAvailable = newPointsAvailable - (agilityPoints + smartsPoints + strengthPoints + spiritPoints + vigorPoints)
        setAttributePoints(newPointsAvailable)
    }, [store.playerCharacter.traits]);
    
    return (
        <Stack className="traits" component="form" noValidate autoComplete="off">
            <Typography className="attributes__heading">Attributes ({attributePoints} bonus point{(attributePoints > 1 || attributePoints == 0) && 's'} left)</Typography>
            <Card className="attributes">
                <AttributeTooltip className="attributes__tooltip" placement="right-start" title="Nimbleness, dexterity, and overall physical coordination of muscles and reflexes">
                    <Typography className="attributes__name">Agility</Typography>
                </AttributeTooltip>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.agility.rank}
                    onChange={(e, newValue) => {
                        const clampedValue = typeof newValue === 'number' ? 
                            newValue < 1 ? 1 : newValue
                            : 1; // Default to 1 if newValue is null
                        dispatch({ type: 'UPDATE_AGILITY', payload: clampedValue });
                    }}
                    max={store.playerCharacter.traits.agility.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.agility.rank + attributePoints}
                />
                <AttributeTooltip className="attributes__tooltip" placement="right-start" title="Raw intellect, perception, and ability to sort and make use of complex information">
                    <Typography className="attributes__name">Smarts</Typography>
                </AttributeTooltip>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.smarts.rank}
                    onChange={(e, newValue) => {
                        const clampedValue = typeof newValue === 'number' ? 
                            newValue < 1 ? 1 : newValue
                            : 1; // Default to 1 if newValue is null
                        dispatch({ type: 'UPDATE_SMARTS', payload: clampedValue });
                    }}
                    max={store.playerCharacter.traits.smarts.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.smarts.rank + attributePoints}
                />
                <AttributeTooltip className="attributes__tooltip" placement="right-start" title="Inner strength and willpower">
                    <Typography className="attributes__name">Spirit</Typography>
                </AttributeTooltip>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.spirit.rank}
                    onChange={(e, newValue) => {
                        const clampedValue = typeof newValue === 'number' ? 
                            newValue < 1 ? 1 : newValue
                            : 1; // Default to 1 if newValue is null
                        dispatch({ type: 'UPDATE_SPIRIT', payload: clampedValue });
                    }}
                    max={store.playerCharacter.traits.spirit.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.spirit.rank + attributePoints}
                />
                <AttributeTooltip className="attributes__tooltip" placement="right-start" title="Raw muscle power">
                    <Typography className="attributes__name">Strength</Typography>
                </AttributeTooltip>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.strength.rank}
                    onChange={(e, newValue) => {
                        const clampedValue = typeof newValue === 'number' ? 
                            newValue < 1 ? 1 : newValue
                            : 1; // Default to 1 if newValue is null
                        dispatch({ type: 'UPDATE_STRENGTH', payload: clampedValue });
                    }}
                    max={store.playerCharacter.traits.strength.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.strength.rank + attributePoints}
                />
                <AttributeTooltip className="attributes__tooltip" placement="right-start" title="Endurance, health, and constitution">
                    <Typography className="attributes__name">Vigor</Typography>
                </AttributeTooltip>
                <Rating
                    name="simple-controlled"
                    value={store.playerCharacter.traits.vigor.rank}
                    onChange={(e, newValue) => {
                        const clampedValue = typeof newValue === 'number' ? 
                            newValue < 1 ? 1 : newValue
                            : 1; // Default to 1 if newValue is null
                        dispatch({ type: 'UPDATE_VIGOR', payload: clampedValue });
                    }}
                    max={store.playerCharacter.traits.vigor.rank + attributePoints > 5 ? 5 : store.playerCharacter.traits.vigor.rank + attributePoints}
                />
            </Card>
            <Typography className="attributes__heading">Skills ({store.playerCharacter.skillPoints} skill point{(store.playerCharacter.skillPoints > 1 || store.playerCharacter.skillPoints == 0) && 's'} left)</Typography>
            <Card className="skills">
                {Object.entries(defaultTraits).map(([traitName, trait]) => (
                    <Box key={traitName}>
                        {/* Check if the attribute has skills */}
                        {Object.keys(trait.skills).length > 0 && (
                            <>
                                <Typography variant="h6" className="attribute-heading">{capitalizeFirstLetter(traitName)}</Typography>
                                {Object.entries(trait.skills).map(([skillName, skillValue]) => (
                                    <Box key={skillName}>
                                        <AttributeTooltip className="attributes__tooltip" placement="right-start" title={''}>
                                            <Typography className="attributes__name">{capitalizeFirstLetter(skillName)}</Typography>
                                        </AttributeTooltip>
                                        <Rating
                                            name="simple-controlled"
                                            value={skillValue}
                                            onChange={(e, newValue) => newValue !== null && handleSkillChange(traitName, skillName, newValue)}
                                            max={trait.rank + attributePoints > 5 ? 5 : trait.rank + attributePoints}
                                        />
                                    </Box>
                                ))}
                            </>
                        )}
                    </Box>
                ))}
            </Card>
        </Stack>
    )
}