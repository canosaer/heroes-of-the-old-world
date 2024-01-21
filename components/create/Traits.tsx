import { useState, useEffect, useContext, useCallback } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, Card, Rating } from '@mui/material';
import { CreateTooltip, AlertTooltip } from './CreateTooltips';
import { defaultTraits } from '../../data/characters/defaultTraits';
import { Trait, TraitsWithIndexSignature } from '../../context/types';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { capitalizeFirstLetter } from '../../lib/utilities';

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

    const calculateTotalImprovementPoints = useCallback(
        (traits: Record<string, Trait>, updatedTraitName?: string, updatedSkillName?: string, updatedSkillValue?: number) => {
          let totalImprovementPoints = 0;
          let noticeBonus = false;
      
          Object.entries<Trait>(traits).forEach(([currentTraitName, currentAbility]) => {
            Object.entries(currentAbility.skills).forEach(([currentSkillName, currentSkillValue]) => {
              let linkedAttributeRank = currentAbility.rank;
              let improvementPoints = 0;
      
              if (store.playerCharacter.species === 'drake' && currentSkillName === 'notice' && linkedAttributeRank === 1) linkedAttributeRank = 2;
      
              if (currentSkillName === updatedSkillName && currentTraitName === updatedTraitName) {
                const improvementPointDifference = (updatedSkillValue ?? 0) - linkedAttributeRank;
                if (improvementPointDifference > 0) {
                  improvementPoints = linkedAttributeRank + improvementPointDifference * 2;
                } else {
                  improvementPoints = updatedSkillValue ?? 0;
                }
              } else {
                const currentValue = traits[currentTraitName].skills[currentSkillName];
                const improvementPointDifference = currentValue - linkedAttributeRank;
                improvementPoints = improvementPointDifference > 0 ? linkedAttributeRank + improvementPointDifference * 2 : currentValue;
              }
      
              totalImprovementPoints += improvementPoints;
            });
          });
      
          if (store.playerCharacter.species === 'drake' && store.playerCharacter.traits.smarts.skills.notice > 2) totalImprovementPoints = totalImprovementPoints - 1;
      
          return totalImprovementPoints;
        },
        [store.playerCharacter.species, store.playerCharacter.traits.smarts.skills.notice]
    );

    const calculateImprovementPoints = useCallback(() => {
        const totalImprovementPoints = calculateTotalImprovementPoints(store.playerCharacter.traits);
        const remainingImprovementPoints = 17 - totalImprovementPoints;
        dispatch({ type: 'UPDATE_IMPROVEMENT_POINTS', payload: remainingImprovementPoints });
    }, [store.playerCharacter.traits, calculateTotalImprovementPoints, dispatch]);

    const handleSkillChange = (abilityName: string, skillName: string, newValue: number) => {
        const payload = {
          [`${abilityName.toLowerCase()}Skill`]: skillName,
          [`${abilityName.toLowerCase()}Value`]: newValue,
        };
    
        const updateType = `UPDATE_${abilityName.toUpperCase()}_SKILL`;
    
        const totalImprovementPoints = calculateTotalImprovementPoints(store.playerCharacter.traits, abilityName, skillName, newValue);
        const remainingImprovementPoints = 17 - totalImprovementPoints;
    
        dispatch({ type: 'UPDATE_IMPROVEMENT_POINTS', payload: remainingImprovementPoints });
        dispatch({ type: updateType, payload });
    };

    // Function to calculate the maximum value for a skill
    const calculateMaxSkillValue = (currentSkillRank: number, pointsToAttributeRank: number, improvementPoints: number): number => {
        let calculatedMaxValue = currentSkillRank;
        if(pointsToAttributeRank < 0) pointsToAttributeRank = 0;
        if (improvementPoints > 0) {
            const remainingSkillPool = improvementPoints - pointsToAttributeRank;
            calculatedMaxValue = currentSkillRank + pointsToAttributeRank + remainingSkillPool / 2;
        }

        // Ensure the maximum value is capped at 5
        return Math.min(Math.floor(calculatedMaxValue), 5);
    };

    useEffect(() => {
        let newPointsAvailable = 5;
        let agilityPoints = store.playerCharacter.traits.agility.rank - 1;
        let smartsPoints = store.playerCharacter.traits.smarts.rank - 1;
        let strengthPoints = store.playerCharacter.traits.strength.rank - 1;
        let spiritPoints = store.playerCharacter.traits.spirit.rank - 1;
        let vigorPoints = store.playerCharacter.traits.vigor.rank - 1;

        if(store.playerCharacter.species === 'dwarf' && store.playerCharacter.traits.vigor.rank >= 2) vigorPoints = vigorPoints - 1;
        if(store.playerCharacter.species === 'elf' && store.playerCharacter.traits.agility.rank >= 2) agilityPoints = agilityPoints - 1;

        newPointsAvailable = newPointsAvailable - (agilityPoints + smartsPoints + strengthPoints + spiritPoints + vigorPoints);
        
        setAttributePoints(newPointsAvailable);
        calculateImprovementPoints();
    }, [store.playerCharacter, calculateImprovementPoints]);
    
    return (
        <Stack className="traits" component="form" noValidate autoComplete="off">
            <Card className="points">
                <Typography className="points__type" variant="h6">Attribute Points: {attributePoints}</Typography>
                <Typography className="points__type points__type_skill" variant="h6">Improvement Points: {store.playerCharacter.improvementPoints}</Typography>
            </Card>
            {Object.entries(defaultTraits).map(([abilityName, trait]) => {
                let currentAbilityRank = (store.playerCharacter.traits as TraitsWithIndexSignature)[abilityName as keyof TraitsWithIndexSignature].rank
                if(abilityName === 'vigor' && store.playerCharacter.species === 'dwarf' && currentAbilityRank === 1) currentAbilityRank = 2;
                if(abilityName === 'agility' && store.playerCharacter.species === 'elf' && currentAbilityRank === 1) currentAbilityRank = 2;

                return (
                    <Box className="category" component="section" key={abilityName}>
                        <Box className="attribute">
                            <CreateTooltip className="attribute__tooltip" placement="top-start" title={traitTooltips[abilityName]}>
                                <Typography className="attribute__name">{capitalizeFirstLetter(abilityName)}</Typography>
                            </CreateTooltip>
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
                                    store.playerCharacter.improvementPoints
                                    );

                                    if(skillName === 'notice' && store.playerCharacter.species === 'drake' && currentAbilityRank === 1) currentAbilityRank = 2;

                                    // Define the onChange function based on skillName
                                    const onChangeHandler = (newValue: number | null) => {
                                        let adjustedValue = newValue === null ? 0 : newValue;

                                        // Special handling for 'athletics', 'stealth', or 'notice'
                                        if (['athletics', 'stealth', 'notice', 'commonKnowledge', 'persuasion'].includes(skillName)) {
                                            adjustedValue = newValue === null ? 1 : newValue;
                                        }

                                        handleSkillChange(abilityName, skillName, adjustedValue);
                                    };

                                    let currentSkillValue = currentAbility.skills[skillName] // Use abilityName to access the corresponding skill value
                                    if(store.playerCharacter.species === 'drake' && skillName === 'notice' && currentSkillValue === 1) currentSkillValue = 2;

                                    return (
                                        <Box className="skill" key={skillName}>
                                            <Box className="skill__heading">
                                                <CreateTooltip className="skill__tooltip" placement="right-start" title={''}>
                                                    <Typography className="skill__name">
                                                        {capitalizeFirstLetter(skillName)}
                                                    </Typography>
                                                </CreateTooltip>
                                                {(pointsToAttributeRank < 1 && store.playerCharacter.improvementPoints > 0 && currentAbility.skills[skillName] < 5) &&
                                                    <AlertTooltip className="alert" placement="right-start" title={`x2 points to advance beyond linked attribute (${capitalizeFirstLetter(abilityName)}: ${currentAbility.rank})`}>
                                                        <AnnouncementIcon color="action" className="alert__icon" />
                                                    </AlertTooltip>
                                                }
                                            </Box>
                                            <Rating
                                                className="skill__rating"
                                                name="simple-controlled"
                                                value={currentSkillValue}
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