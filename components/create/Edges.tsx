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
    const [results, setResults] = useState<Edge[]>(edges.N); // Initialize with the entire list of edges
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
            {/* Rendering the results */}
            {results.map((edge, index) => (
                <Card key={index} sx={{ maxWidth: 400, margin: 'auto', mb: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {edge.name}
                        </Typography>
                        <Typography variant="body2">{edge.summary}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    )
}