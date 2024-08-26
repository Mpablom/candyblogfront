import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface SwipeableTextMobileStepperProps {
  gallery: string[];
  title: string;
}

const SwipeableTextMobileStepper: React.FC<SwipeableTextMobileStepperProps> = ({ gallery, title }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState<string | null>(null);
  const [modalImageTitle, setModalImageTitle] = React.useState<string | null>(null);

  const maxSteps = gallery.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleOpen = (imgPath: string) => {
    setModalImage(imgPath);
    setModalImageTitle(title); // Set the title
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModalNext = () => {
    const nextStep = (activeStep + 1) % maxSteps;
    setActiveStep(nextStep);
    setModalImage(gallery[nextStep]);
  };

  const handleModalBack = () => {
    const prevStep = (activeStep - 1 + maxSteps) % maxSteps;
    setActiveStep(prevStep);
    setModalImage(gallery[prevStep]);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {gallery.map((imgPath, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                  cursor: 'pointer',
                }}
                src={imgPath}
                alt={`Image ${index + 1}`}
                onClick={() => handleOpen(imgPath)}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} sx={{fontSize: '1em'}}>
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{fontSize: '1em'}}/>
            ) : (
              <KeyboardArrowRight/>
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} sx={{fontSize: '1em', color: 'secondary.main'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{fontSize: '1em'}} />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{modalImageTitle}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={handleModalBack}>
              <KeyboardArrowLeft sx={{ fontSize: '5em' }}/>
            </Button>
            {modalImage && (
              <Box
                component="img"
                sx={{
                  width: '90%',
                  height: '80vh',
                }}
                src={modalImage}
                alt="Modal Image"
              />
            )}
            <Button onClick={handleModalNext}>
              <KeyboardArrowRight sx={{ fontSize: '5em' }} />
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SwipeableTextMobileStepper;
