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
    const [ edgePoints, setEdgePoints ] = useState(store.playerCharacter.species === 'human' ? 2 : 1);
    const [ consideredEdges, setConsideredEdges ] = useState<string[]>([]);
    
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const toggleEdge = (edgeName: string) => {
        // Check if the edge is already in the player's edges
        if (store.playerCharacter.edges.includes(edgeName)) {
            // Edge is already present, remove it
            dispatch({ type: 'REMOVE_EDGE', payload: edgeName });
        } else {
            if (edgePoints > 0) {
                // Edge is not present, add it
                dispatch({ type: 'ADD_EDGE', payload: edgeName });
            } else {
                // Edge is being considered, but no edgePoints remaining
                // Check if the edge is already in the consideredEdges array
                if (consideredEdges.includes(edgeName)) {
                    // Edge is already considered, remove it from consideredEdges
                    setConsideredEdges(consideredEdges.filter(edge => edge !== edgeName));
                } else {
                    // Edge is not in consideredEdges, add it
                    setConsideredEdges([...consideredEdges, edgeName]);
                }
            }
        }
    };

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

    useEffect(() => {
        const maxEdgePoints = store.playerCharacter.species === 'human' ? 2 : 1

        if (maxEdgePoints - store.playerCharacter.edges.length !== edgePoints) {
            setEdgePoints(maxEdgePoints - store.playerCharacter.edges.length)
        }
    }, [store.playerCharacter.edges, edgePoints, store.playerCharacter.species]);

    useEffect(() => {
        console.log(store)
    }, [store]);

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

                // Check if the edge is selected or considered
                const isSelected = store.playerCharacter.edges.includes(edge.name);
                const isConsidered = consideredEdges.includes(edge.name);

                return(
                    eligible &&
                        <Card
                            className={`edge-card ${isSelected ? 'edge-card_selected' : isConsidered ? 'edge-card_considered' : ''}`}
                            key={`${i}-${edge.name}`}
                            onClick={() => toggleEdge(edge.name)}
                        >
                            <CardContent className="edge-card__content">
                                <Typography  className="edge-card__name" variant="h5">{edge.name}</Typography>
                                <Typography className="edge-card__summary" variant="body2">{edge.summary}</Typography>
                            </CardContent>
                        </Card>
                );
            })}
        </Stack>
    )
}