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
                let display = true
                
                if (edge.requirements) {
                    if (edge.requirements.attributes) {
                        // Check each attribute requirement and set display to false if it doesn't meet the condition
                        if (edge.requirements.attributes.spirit && edge.requirements.attributes.spirit > store.playerCharacter.traits.spirit.rank) {
                            display = false;
                        } 
                        else if (edge.requirements.attributes.strength && edge.requirements.attributes.strength > store.playerCharacter.traits.strength.rank) {
                            display = false;
                        } 
                        else if (edge.requirements.attributes.vigor && edge.requirements.attributes.vigor > store.playerCharacter.traits.vigor.rank) {
                            display = false;
                        } 
                        else if (edge.requirements.attributes.smarts && edge.requirements.attributes.smarts > store.playerCharacter.traits.smarts.rank) {
                            display = false;
                        } 
                        else if (edge.requirements.attributes.agility && edge.requirements.attributes.agility > store.playerCharacter.traits.agility.rank) {
                            display = false;
                        }
                    } 
                    if (edge.requirements.edges) {
                        // Check if store.playerCharacter.edges contains the edge name
                        if (!store.playerCharacter.edges.includes(edge.name)) {
                            display = false;
                        }
                    }
                    if (edge.requirements.skills) {
                        const requiredSkills = edge.requirements.skills;

                        for (const skill in requiredSkills) {
                            if(skill === 'fighting') console.log('holler dawg')
                        }
                    }
                }

                return(
                    <Card key={`${i}-${edge.name}`}>
                        <CardContent>
                            <Typography variant="h5">{edge.name}</Typography>
                            <Typography variant="body2">{edge.summary}</Typography>
                        </CardContent>
                    </Card>
                );
            })};
        </Stack>
    )
}