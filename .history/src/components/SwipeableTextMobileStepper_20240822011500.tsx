import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos predeterminados de Carousel
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface SwipeableTextMobileStepperProps {
  gallery: string[];
  title: string;
}

const SwipeableTextMobileStepper: React.FC<SwipeableTextMobileStepperProps> = ({ gallery, title }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState<string | null>(null);

  const maxSteps = gallery.length;

  const handleStepChange = (index: number) => {
    setActiveStep(index);
  };

  const handleOpen = (imgPath: string) => {
    setModalImage(imgPath);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto' }}>
      <Carousel
        selectedItem={activeStep}
        onChange={handleStepChange}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        infiniteLoop
        swipeable
        emulateTouch
        autoPlay
      >
        {gallery.map((imgPath, index) => (
          <div key={index} onClick={() => handleOpen(imgPath)}>
            <img
              src={imgPath}
              alt={`Image ${index + 1}`}
              style={{
                height: 255,
                display: 'block',
                maxWidth: 400,
                overflow: 'hidden',
                width: '100%',
                cursor: 'pointer',
              }}
            />
          </div>
        ))}
      </Carousel>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={() => handleStepChange((activeStep + 1) % maxSteps)}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => handleStepChange((activeStep - 1 + maxSteps) % maxSteps)}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={() => handleStepChange((activeStep - 1 + maxSteps) % maxSteps)}>
              <KeyboardArrowLeft />
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
            <Button onClick={() => handleStepChange((activeStep + 1) % maxSteps)}>
              <KeyboardArrowRight />
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SwipeableTextMobileStepper;
