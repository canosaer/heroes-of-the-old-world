import { useState, useEffect, useContext, useCallback } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, Card, Button, Rating } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { defaultTraits } from '../../data/characters/defaultTraits';
import { Trait, TraitsWithIndexSignature } from '../../context/types';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function Traits() {
    const [ store, dispatch ] = useContext(Context);
    const [ attributePoints, setAttributePoints ] = useState(5);

    type TraitTooltips = {
        [key: string]: string;
    };

    const traitTooltips: TraitTooltips = {
        agility: "Nimbleness, dexterity, and overall physical coordination of muscles and reflexes",
        smarts: "Raw intellect, perception, and ability to sort and make use of complex information",
        spirit: "Inner strength and willpower",
        strength: "Raw muscle power",
        vigor: "Endurance, health, and constitution",
    };

    const TraitTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          boxShadow: theme.shadows[1],
          fontSize: 13,
          maxWidth: 245,
        },
    }));

    const AlertTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          boxShadow: theme.shadows[1],
          fontSize: 13,
          maxWidth: 125,
        },
    }));

    const calculateTotalSkillPoints = (
        traits: Record<string, Trait>,
        updatedTraitName?: string,
        updatedSkillName?: string,
        updatedSkillValue?: number
      ) => {
        let totalSkillPoints = 0;
      
        Object.entries<Trait>(traits).forEach(([currentTraitName, currentAbility]) => {
          Object.entries(currentAbility.skills).forEach(([currentSkillName, currentSkillValue]) => {
            const linkedAttributeRank = currentAbility.rank;
            let skillPoints = 0;
      
            if (currentSkillName === updatedSkillName && currentTraitName === updatedTraitName) {
              const skillPointDifference = (updatedSkillValue ?? 0) - linkedAttributeRank;
              if (skillPointDifference > 0) {
                skillPoints = linkedAttributeRank + skillPointDifference * 2;
              } else {
                skillPoints = updatedSkillValue ?? 0;
              }
            } else {
              const currentValue = traits[currentTraitName].skills[currentSkillName];
              const skillPointDifference = currentValue - linkedAttributeRank;
              skillPoints = skillPointDifference > 0 ? linkedAttributeRank + skillPointDifference * 2 : currentValue;
            }
      
            totalSkillPoints += skillPoints;
          });
        });
      
        return totalSkillPoints;
    };

    const calculateSkillPoints = useCallback(() => {
        const totalSkillPoints = calculateTotalSkillPoints(store.playerCharacter.traits);
        const remainingSkillPoints = 17 - totalSkillPoints;
        dispatch({ type: 'UPDATE_SKILL_POINTS', payload: remainingSkillPoints });
    }, [store.playerCharacter.traits, dispatch]);

    const handleSkillChange = (abilityName: string, skillName: string, newValue: number) => {
        const payload = {
          [`${abilityName.toLowerCase()}Skill`]: skillName,
          [`${abilityName.toLowerCase()}Value`]: newValue,
        };
    
        const updateType = `UPDATE_${abilityName.toUpperCase()}_SKILL`;
    
        const totalSkillPoints = calculateTotalSkillPoints(store.playerCharacter.traits, abilityName, skillName, newValue);
        const remainingSkillPoints = 17 - totalSkillPoints;
    
        dispatch({ type: 'UPDATE_SKILL_POINTS', payload: remainingSkillPoints });
        dispatch({ type: updateType, payload });
    };

    const capitalizeFirstLetter = (incomingString: string) => {
        let result = incomingString.charAt(0).toUpperCase();
    
        for (let i = 1; i < incomingString.length; i++) {
            const currentChar = incomingString.charAt(i);
            const previousChar = incomingString.charAt(i - 1);
    
            // Insert a space before uppercase letters that are not at the beginning
            if (currentChar === currentChar.toUpperCase() && previousChar !== ' ') {
                result += ' ';
            }
    
            result += currentChar;
        }
    
        return result;
    };

    // Function to calculate the maximum value for a skill
    const calculateMaxSkillValue = (currentSkillRank: number, pointsToAttributeRank: number, skillPoints: number): number => {
        let calculatedMaxValue = currentSkillRank;
        if(pointsToAttributeRank < 0) pointsToAttributeRank = 0
        if (skillPoints > 0) {
            const remainingSkillPool = skillPoints - pointsToAttributeRank;
            calculatedMaxValue = currentSkillRank + pointsToAttributeRank + remainingSkillPool / 2;
        }

        // Ensure the maximum value is capped at 5
        return Math.min(Math.floor(calculatedMaxValue), 5);
    };

    useEffect(() => {
        let newPointsAvailable = 5;
        const agilityPoints = store.playerCharacter.traits.agility.rank - 1;
        const smartsPoints = store.playerCharacter.traits.smarts.rank - 1;
        const strengthPoints = store.playerCharacter.traits.strength.rank - 1;
        const spiritPoints = store.playerCharacter.traits.spirit.rank - 1;
        let vigorPoints = store.playerCharacter.traits.vigor.rank - 1;

        if(store.playerCharacter.species === 'dwarf' && store.playerCharacter.traits.vigor.rank > 2) vigorPoints = vigorPoints - 1;

        newPointsAvailable = newPointsAvailable - (agilityPoints + smartsPoints + strengthPoints + spiritPoints + vigorPoints);
        setAttributePoints(newPointsAvailable);
        calculateSkillPoints();
    }, [store.playerCharacter.traits, calculateSkillPoints]);
    
    return (
        <Stack className="traits" component="form" noValidate autoComplete="off">
            <Card className="points">
                <Typography className="points__type" variant="h6">Attribute Points: {attributePoints}</Typography>
                <Typography className="points__type points__type_skill" variant="h6">Skill Points: {store.playerCharacter.skillPoints}</Typography>
            </Card>
            {Object.entries(defaultTraits).map(([abilityName, trait]) => {
                let currentAbilityRank = (store.playerCharacter.traits as TraitsWithIndexSignature)[abilityName as keyof TraitsWithIndexSignature].rank
                if(abilityName === 'vigor' && store.playerCharacter.species === 'dwarf' && currentAbilityRank === 1) currentAbilityRank = 2;

                return (
                    <Box className="category" component="section" key={abilityName}>
                        <Box className="attribute">
                            <TraitTooltip className="attribute__tooltip" placement="top-start" title={traitTooltips[abilityName]}>
                                <Typography className="attribute__name">{capitalizeFirstLetter(abilityName)}</Typography>
                            </TraitTooltip>
                            <Rating
                                key={`${abilityName}-${(store.playerCharacter.traits as TraitsWithIndexSignature)[abilityName as keyof TraitsWithIndexSignature].rank}`}
                                className="attribute__rating"
                                name="simple-controlled"
                                value={currentAbilityRank}
                                onChange={(e, newValue) => {
                                    const clampedValue = typeof newValue === 'number' ? newValue < 1 ? 1 : newValue : 1;
                                    dispatch({ type: `UPDATE_${abilityName.toUpperCase()}`, payload: clampedValue });
                                }}
                                max={
                                    (store.playerCharacter.traits as TraitsWithIndexSignature)[abilityName as keyof TraitsWithIndexSignature].rank + attributePoints > 5
                                    ? 5
                                    : (store.playerCharacter.traits as TraitsWithIndexSignature)[abilityName as keyof TraitsWithIndexSignature].rank + attributePoints
                                }
                            />
                        </Box>
                        <Card className="skills__category">
                            {Object.keys(trait.skills).length > 0 ?
                                Object.entries(trait.skills).map(([skillName, skillValue]) => {
                                    const currentAbility = (store.playerCharacter.traits as TraitsWithIndexSignature)[abilityName as keyof TraitsWithIndexSignature];
                                    const currentSkillRank = currentAbility.skills[skillName];
                                    const pointsToAttributeRank = currentAbility.rank - currentSkillRank;
                                    const calculatedMaxValue = calculateMaxSkillValue(
                                    currentSkillRank,
                                    pointsToAttributeRank,
                                    store.playerCharacter.skillPoints
                                    );

                                    // Define the onChange function based on skillName
                                    const onChangeHandler = (newValue: number | null) => {
                                        let adjustedValue = newValue === null ? 0 : newValue;

                                        // Special handling for 'athletics', 'stealth', or 'notice'
                                        if (['athletics', 'stealth', 'notice', 'commonKnowledge', 'persuasion'].includes(skillName)) {
                                            adjustedValue = newValue === null ? 1 : newValue;
                                        }

                                        handleSkillChange(abilityName, skillName, adjustedValue);
                                    };

                                    return (
                                        <Box className="skill" key={skillName}>
                                            <Box className="skill__heading">
                                                <TraitTooltip className="skill__tooltip" placement="right-start" title={''}>
                                                    <Typography className="skill__name">
                                                        {capitalizeFirstLetter(skillName)}
                                                    </Typography>
                                                </TraitTooltip>
                                                {(pointsToAttributeRank < 1 && store.playerCharacter.skillPoints > 0 && currentAbility.skills[skillName] < 5) &&
                                                    <AlertTooltip className="alert" placement="right-start" title={`x2 points to advance beyond linked attribute (${capitalizeFirstLetter(abilityName)}: ${currentAbility.rank})`}>
                                                        <AnnouncementIcon color="action" className="alert__icon" />
                                                    </AlertTooltip>
                                                }
                                            </Box>
                                            <Rating
                                                className="skill__rating"
                                                name="simple-controlled"
                                                value={currentAbility.skills[skillName]} // Use abilityName to access the corresponding skill value
                                                onChange={(e, newValue) => onChangeHandler(newValue)}
                                                max={calculatedMaxValue}
                                            />
                                        </Box>
                                    );
                                })
                                :
                                <Typography className="skill__none">No linked skills</Typography>
                            }
                        </Card>
                    </Box>
                )}
            )}
        </Stack>
    )
}