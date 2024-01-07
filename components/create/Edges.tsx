import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { edges } from '../../data/characters/edges'
import { useDebounce } from '../../lib/utilities';
import { Edge } from '../../types/edgeTypes'

export default function Edges() {
    const [ store, dispatch ] = useContext(Context);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ results, setResults ] = useState<Edge[]>(edges.N); // Initialize with the entire list of edges
    const [ edgePoints, setEdgePoints ] = useState(1);
    
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Filter edges based on the debouncedSearchTerm
    useEffect(() => {
        if (debouncedSearchTerm) {
            const filteredEdges: Edge[] = edges.N.filter(edge =>
                edge.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            );
            setResults(filteredEdges);
        } else {
            setResults(edges.N); // Set Results to the entire list of edges if search term is empty
        }
    }, [debouncedSearchTerm]);

    return (
        <Stack className="edges" component="form" noValidate autoComplete="off">
            <Card className="points">
                <Typography className="points__display" variant="h6">Edge Points: {edgePoints}</Typography>
            </Card>
            {results.map((edge, i) => {
                let eligible = true;

                if (edge.requirements) {
                    // Check each attribute requirement and set eligible to false if it doesn't meet the condition
                    const attributes = edge.requirements.attributes ?? {};
                    const traitRanks = store.playerCharacter.traits;

                    const hasUnmetAttribute = Object.keys(attributes).some(attribute => {
                        const attributeName = attribute as keyof typeof attributes;
                        return attributes[attributeName] && attributes[attributeName]! > (traitRanks[attributeName]?.rank ?? 0);
                    });

                    if (hasUnmetAttribute) {
                        eligible = false;
                    }
            
                    // Check if store.playerCharacter.edges contains the edge name
                    if (edge.requirements.edges && !store.playerCharacter.edges.includes(edge.name)) {
                        eligible = false;
                    }
            
                    // Access skills directly without iterating through Object.keys()
                    if (edge.requirements.skills) {
                        const eitherRequirement = edge.requirements.skills.either;
            
                        const playerSkills = store.playerCharacter.traits;
            
                        if (!eitherRequirement) {
                            if (
                                (edge.requirements.skills.athletics && edge.requirements.skills.athletics > playerSkills.agility.skills.athletics) ||
                                (edge.requirements.skills.fighting && edge.requirements.skills.fighting > playerSkills.agility.skills.fighting) ||
                                (edge.requirements.skills.notice && edge.requirements.skills.notice > playerSkills.smarts.skills.notice) ||
                                (edge.requirements.skills.persuasion && edge.requirements.skills.persuasion > playerSkills.spirit.skills.persuasion) ||
                                (edge.requirements.skills.repair && edge.requirements.skills.repair > playerSkills.smarts.skills.repair) ||
                                (edge.requirements.skills.research && edge.requirements.skills.research > playerSkills.smarts.skills.research) ||
                                (edge.requirements.skills.stealth && edge.requirements.skills.stealth > playerSkills.agility.skills.stealth) ||
                                (edge.requirements.skills.survival && edge.requirements.skills.survival > playerSkills.smarts.skills.survival) ||
                                (edge.requirements.skills.shooting && edge.requirements.skills.shooting > playerSkills.agility.skills.shooting) ||
                                (edge.requirements.skills.taunt && edge.requirements.skills.taunt > playerSkills.smarts.skills.taunt) ||
                                (edge.requirements.skills.thievery && edge.requirements.skills.thievery > playerSkills.agility.skills.thievery)
                            ) {
                                eligible = false;
                            }                            
                        } else {
                            const requiredAthletics = eitherRequirement.athletics;
                            const requiredShooting = eitherRequirement.shooting;
            
                            if (requiredAthletics > playerSkills.agility.skills.athletics && requiredShooting > playerSkills.agility.skills.shooting) {
                                eligible = false;
                            }
                        }
                    }
                }

                return(
                    eligible &&
                        <Card key={`${i}-${edge.name}`}>
                            <CardContent>
                                <Typography variant="h5">{edge.name}</Typography>
                                <Typography variant="body2">{edge.summary}</Typography>
                            </CardContent>
                        </Card>
                );
            })}
        </Stack>
    )
}