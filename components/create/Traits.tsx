import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/store';
import { Box } from '@mui/system';
import { Typography, Stack, TextField, Card, CardContent, CardMedia, IconButton, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function Traits() {
    const [ store, dispatch ] = useContext(Context);
    const [value, setValue] = useState<number | null>(1);
    const [hover, setHover] = useState(-1);
  

    const labels: { [index: string]: string } = {
        1: 'Poor',
        2: 'Average',
        3: 'Good',
        4: 'Excellent',
        5: 'Legendary',
    };

    const getLabelText = (value: number) => {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
        <Stack className="traits" component="form" noValidate autoComplete="off">
            <Card className="attribute">
                <Typography className="attribute__heading">Agility</Typography>
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Card>
        </Stack>
    )
}