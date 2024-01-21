/*
NAME: create
DESCRIPTION:
*/

import { useState, useEffect, useContext } from 'react';
import { Context } from '../context/store';
import { Box } from '@mui/system';
import DataLoader from '../components/DataLoader';
import { Typography, Paper, Button, TextField, MobileStepper } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import Basics from '../components/create/Basics';
import Edges from '../components/create/Edges';
import Traits from '../components/create/Traits';
import Spells from '../components/create/Spells';

export default function Create() {
  const [ store, dispatch ] = useContext(Context);
  const [ activeStep, setActiveStep] = useState(0);

  // Define heading text based on activeStep
  let headingText = 'Basics';
  switch (activeStep) {
    case 0:
      headingText = 'Basics';
      break;
    case 1:
      headingText = 'Traits';
      break;
    case 2:
      headingText = 'Spells';
      break;
    case 3:
      headingText = 'Edges';
      break;
    default:
      break;
  }

  const advanceStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const returnStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // useEffect(() => {
  //   console.log(tab)
  // }, [tab]);

  return (
    <Box className="create" component="main">
      <DataLoader />
      <Typography className="create__heading" variant="h4" textAlign="center">Character Creation</Typography>
      <Paper className="chargen" component="section">
        <MobileStepper
          className="stepper"
          variant="dots"
          steps={4}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={advanceStep} disabled={activeStep === 3}>
              <NavigateNext />
            </Button>
          }
          backButton={
            <Button size="small" onClick={returnStep} disabled={activeStep === 0}>
              <NavigateBefore />
            </Button>
          }
        />
        <Typography className="chargen__heading" variant="h5" textAlign="center">{headingText}</Typography>
        {activeStep === 0 && <Basics />}
        {activeStep === 1 && <Traits />}
        {activeStep === 2 && <Spells />}
        {activeStep === 3 && <Edges />}
      </Paper>
      
    </Box>
  )
}